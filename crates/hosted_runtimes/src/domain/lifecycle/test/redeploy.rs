use super::*;

#[test]
fn missing_roxd_uses_fleet_status_and_only_restarts_the_daemon() {
    for phase in [Phase::Running, Phase::Booting] {
        for observed in [
            Some(InstanceStatus::Running),
            Some(InstanceStatus::Stopped),
            None,
        ] {
            for misses in 0..=MAX_ROXD_MISSES {
                let mut state = billed(Phase::Stopped);
                state.phase = phase.clone();
                state.roxd_misses = misses;
                let context = Context {
                    host: HOST,
                    policy: policy(),
                    now: now(),
                    host_has_room: true,
                    enrollment_generation: Default::default(),
                };
                let (next, effects) = transition(
                    &state,
                    &Event::RoxdMissing {
                        instance_status: observed,
                    },
                    context,
                )
                .unwrap();
                if observed == Some(InstanceStatus::Running) {
                    assert_eq!(next.phase, phase);
                    assert!(next.recent_crashes.is_empty());
                    assert_eq!(next.roxd_misses, (misses + 1).min(MAX_ROXD_MISSES));
                    let mut expected = vec![Effect::ScheduleTimer {
                        kind: TimerKind::RoxdMissing,
                        at: now() + ROXD_GRACE,
                    }];
                    if misses == MAX_ROXD_MISSES - 1 {
                        expected.push(Effect::RestartRoxd { host: HOST });
                        expected.push(Effect::PageOperator {
                            reason: "roxd missing repeatedly while the guest is running"
                                .to_owned(),
                        });
                    }
                    assert_eq!(effects, expected);
                } else {
                    assert_eq!(
                        next.phase,
                        Phase::Crashed {
                            restarts: 1,
                            retry: Some(Retry {
                                attempt: 0,
                                next_at: now() + Duration::seconds(30),
                            }),
                        }
                    );
                    assert_eq!(next.recent_crashes, vec![now()]);
                    assert_eq!(
                        effects,
                        vec![Effect::ScheduleTimer {
                            kind: TimerKind::RestartDue,
                            at: now() + Duration::seconds(30)
                        }]
                    );
                }
            }
        }
    }
}

#[test]
fn reconnect_resets_misses_and_stale_timer_cannot_restart_roxd() {
    let mut state = billed(Phase::Stopped);
    state.phase = Phase::Booting;
    state.roxd_misses = MAX_ROXD_MISSES;
    let context = Context {
        host: HOST,
        policy: policy(),
        now: now(),
        host_has_room: true,
        enrollment_generation: Default::default(),
    };
    let (connected, _) = transition(&state, &Event::RoxdConnected, context).unwrap();
    assert_eq!(connected.roxd_misses, 0);
    assert_eq!(connected.phase, Phase::Running);
    let (next, effects) = transition(
        &connected,
        &Event::RoxdMissing {
            instance_status: Some(InstanceStatus::Running),
        },
        context,
    )
    .unwrap();
    assert_eq!(next, connected);
    assert!(effects.is_empty());
}

#[test]
fn early_roxd_connection_survives_replayed_creation_completion() {
    let mut state = billed(Phase::Stopped);
    state.phase = Phase::Provisioning { start: true };
    let context = Context {
        host: HOST,
        policy: policy(),
        now: now(),
        host_has_room: true,
        enrollment_generation: Default::default(),
    };
    let (connected, _) = transition(&state, &Event::RoxdConnected, context).unwrap();
    let (completed, effects) = transition(&connected, &Event::InstanceStarted, context).unwrap();
    assert_eq!(completed.phase, Phase::Running);
    assert!(completed.roxd_connected);
    assert!(effects.is_empty());
}
