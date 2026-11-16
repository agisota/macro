use super::*;

const PAIRED_CONFIG: &str = r#"
[credentials]
harness_id = "00000000-0000-0000-0000-0000004a125a"
token = "mhns_secret"

[harness]
command = "claude-code-acp"

[workspace]
path = "/work/project"
"#;

const UNPAIRED_CONFIG: &str = r#"
[harness]
command = "opencode"
args = ["acp"]

[workspace]
path = "/work/other"
"#;

#[test]
fn profile_names_are_lowercase_letters_digits_dashes_and_underscores() {
    assert_eq!(
        "work".parse::<ProfileName>().expect("valid").to_string(),
        "work"
    );
    assert_eq!(
        "build_box-2"
            .parse::<ProfileName>()
            .expect("valid")
            .to_string(),
        "build_box-2"
    );
    assert!("Work".parse::<ProfileName>().is_err());
    assert!("".parse::<ProfileName>().is_err());
    assert!("../work".parse::<ProfileName>().is_err());
    assert!("my work".parse::<ProfileName>().is_err());
}

#[test]
fn a_folder_without_a_config_is_left_alone() {
    let home = tempfile::tempdir().expect("home");
    let folder = tempfile::tempdir().expect("folder");

    let adopted = adopt_folder_config(folder.path(), &RoxdHome::at(home.path())).expect("adopt");

    assert_eq!(adopted, None);
    assert!(!home.path().join("roxd.toml").exists());
}

#[test]
fn a_folder_config_becomes_the_default_when_there_is_none() {
    let home = tempfile::tempdir().expect("home");
    let workspace = tempfile::tempdir().expect("workspace");
    let folder = workspace.path().join("project");
    std::fs::create_dir(&folder).expect("folder");
    std::fs::write(folder.join("roxd.toml"), PAIRED_CONFIG).expect("folder config");

    let adopted = adopt_folder_config(&folder, &RoxdHome::at(home.path()))
        .expect("adopt")
        .expect("moved");

    assert_eq!(
        adopted,
        AdoptedFolderConfig {
            from: folder.join("roxd.toml"),
            selection: ConfigSelection {
                path: home.path().join("roxd.toml"),
                profile: None,
            },
        }
    );
    assert_eq!(
        std::fs::read_to_string(home.path().join("roxd.toml")).expect("moved config"),
        PAIRED_CONFIG
    );
    assert!(!folder.join("roxd.toml").exists());
    assert!(!folder.join("roxd.toml.lock").exists());
    assert!(
        adopted
            .announcement()
            .ends_with("and is serving it; from now on run `roxd` from any folder")
    );
    #[cfg(unix)]
    {
        use std::os::unix::fs::PermissionsExt as _;
        let mode = std::fs::metadata(home.path().join("roxd.toml"))
            .expect("metadata")
            .permissions()
            .mode();
        assert_eq!(mode & 0o777, 0o600);
    }
}

#[test]
fn a_folder_config_becomes_a_profile_named_after_the_folder_when_a_default_exists() {
    let home = tempfile::tempdir().expect("home");
    std::fs::write(home.path().join("roxd.toml"), UNPAIRED_CONFIG).expect("default config");
    let workspace = tempfile::tempdir().expect("workspace");
    let folder = workspace.path().join("My Project");
    std::fs::create_dir(&folder).expect("folder");
    std::fs::write(folder.join("roxd.toml"), PAIRED_CONFIG).expect("folder config");

    let adopted = adopt_folder_config(&folder, &RoxdHome::at(home.path()))
        .expect("adopt")
        .expect("moved");

    let profile_path = home.path().join("profiles").join("my-project.toml");
    assert_eq!(
        adopted.selection,
        ConfigSelection {
            path: profile_path.clone(),
            profile: Some("my-project".parse().expect("profile name")),
        }
    );
    assert_eq!(
        std::fs::read_to_string(&profile_path).expect("moved config"),
        PAIRED_CONFIG
    );
    assert_eq!(
        std::fs::read_to_string(home.path().join("roxd.toml")).expect("default config"),
        UNPAIRED_CONFIG
    );
    assert!(!folder.join("roxd.toml").exists());
    assert!(
        adopted
            .announcement()
            .ends_with("from now on run `roxd --profile my-project` from any folder")
    );
}

#[test]
fn a_folder_profile_whose_name_is_taken_gets_the_next_number() {
    let home = tempfile::tempdir().expect("home");
    std::fs::write(home.path().join("roxd.toml"), UNPAIRED_CONFIG).expect("default config");
    std::fs::create_dir(home.path().join("profiles")).expect("profiles");
    std::fs::write(
        home.path().join("profiles").join("project.toml"),
        UNPAIRED_CONFIG,
    )
    .expect("existing profile");
    let workspace = tempfile::tempdir().expect("workspace");
    let folder = workspace.path().join("project");
    std::fs::create_dir(&folder).expect("folder");
    std::fs::write(folder.join("roxd.toml"), PAIRED_CONFIG).expect("folder config");

    let adopted = adopt_folder_config(&folder, &RoxdHome::at(home.path()))
        .expect("adopt")
        .expect("moved");

    assert_eq!(
        adopted.selection.path,
        home.path().join("profiles").join("project-2.toml")
    );
    assert_eq!(
        std::fs::read_to_string(home.path().join("profiles").join("project.toml"))
            .expect("existing profile"),
        UNPAIRED_CONFIG
    );
}

#[test]
fn a_folder_config_becomes_a_profile_while_another_roxd_holds_the_missing_default() {
    let home = tempfile::tempdir().expect("home");
    let _quickstarting = config::lock(&home.path().join("roxd.toml")).expect("default lock");
    let workspace = tempfile::tempdir().expect("workspace");
    let folder = workspace.path().join("project");
    std::fs::create_dir(&folder).expect("folder");
    std::fs::write(folder.join("roxd.toml"), PAIRED_CONFIG).expect("folder config");

    let adopted = adopt_folder_config(&folder, &RoxdHome::at(home.path()))
        .expect("adopt")
        .expect("moved");

    assert_eq!(
        adopted.selection.path,
        home.path().join("profiles").join("project.toml")
    );
    assert!(!home.path().join("roxd.toml").exists());
}

#[test]
fn the_default_config_itself_is_not_a_folder_config() {
    let home = tempfile::tempdir().expect("home");
    std::fs::write(home.path().join("roxd.toml"), PAIRED_CONFIG).expect("default config");

    let adopted = adopt_folder_config(home.path(), &RoxdHome::at(home.path())).expect("adopt");

    assert_eq!(adopted, None);
    assert_eq!(
        std::fs::read_to_string(home.path().join("roxd.toml")).expect("default config"),
        PAIRED_CONFIG
    );
}

#[test]
fn a_folder_config_another_roxd_serves_stays_put() {
    let home = tempfile::tempdir().expect("home");
    let folder = tempfile::tempdir().expect("folder");
    std::fs::write(folder.path().join("roxd.toml"), PAIRED_CONFIG).expect("folder config");
    let _served = config::lock(&folder.path().join("roxd.toml")).expect("folder lock");

    let error = adopt_folder_config(folder.path(), &RoxdHome::at(home.path()))
        .expect_err("a served folder config is not moved");

    assert!(matches!(error, AdoptError::Served { .. }));
    assert!(folder.path().join("roxd.toml").exists());
    assert!(!home.path().join("roxd.toml").exists());
}

#[test]
fn a_second_runtime_is_offered_the_host_name_numbered_from_two() {
    let home = tempfile::tempdir().expect("home");
    let roxd_home = RoxdHome::at(home.path());

    assert_eq!(
        roxd_home.suggested_profile("Build-Box.local").to_string(),
        "build-box-local-2"
    );

    std::fs::create_dir(home.path().join("profiles")).expect("profiles");
    std::fs::write(
        home.path().join("profiles").join("build-box-local-2.toml"),
        UNPAIRED_CONFIG,
    )
    .expect("taken profile");
    assert_eq!(
        roxd_home.suggested_profile("Build-Box.local").to_string(),
        "build-box-local-3"
    );
    assert_eq!(roxd_home.suggested_profile("???").to_string(), "roxd-2");
}

#[test]
fn a_profile_pairs_under_the_machine_name_and_the_profile() {
    let home = RoxdHome::at(Path::new("/home/someone/.roxd"));

    assert_eq!(
        ConfigSelection::default_in(&home).pairing_name("build-box"),
        "build-box"
    );
    assert_eq!(
        ConfigSelection::profile_in(&home, "work".parse().expect("profile name"))
            .pairing_name("build-box"),
        "build-box · work"
    );
    assert_eq!(
        ConfigSelection::profile_in(&home, "work".parse().expect("profile name")).path,
        PathBuf::from("/home/someone/.roxd/profiles/work.toml")
    );
}

#[test]
fn the_profile_prompt_takes_the_suggestion_a_valid_name_or_gives_up_at_end_of_input() {
    let served = Path::new("/home/someone/.roxd/roxd.toml");
    let suggestion: ProfileName = "build-box-2".parse().expect("profile name");

    let mut output = Vec::new();
    let chosen =
        ask_for_profile(served, &suggestion, &mut "\n".as_bytes(), &mut output).expect("prompt");
    assert_eq!(chosen, Some(suggestion.clone()));
    assert_eq!(
        String::from_utf8(output).expect("utf-8"),
        "Another roxd is already running with /home/someone/.roxd/roxd.toml.\n\
         Start another machine on this computer under a new profile (Ctrl-C to cancel).\n\
         Profile name [build-box-2]: "
    );

    let mut output = Vec::new();
    let chosen = ask_for_profile(
        served,
        &suggestion,
        &mut "Side Project\nside\n".as_bytes(),
        &mut output,
    )
    .expect("prompt");
    assert_eq!(chosen, Some("side".parse().expect("profile name")));
    assert!(
        String::from_utf8(output)
            .expect("utf-8")
            .contains("`Side Project` is not a profile name")
    );

    let chosen =
        ask_for_profile(served, &suggestion, &mut "".as_bytes(), &mut Vec::new()).expect("prompt");
    assert_eq!(chosen, None);
}

#[test]
fn profiles_lists_the_default_and_each_profile_with_pairing_and_whether_it_runs() {
    let home = tempfile::tempdir().expect("home");
    std::fs::write(home.path().join("roxd.toml"), PAIRED_CONFIG).expect("default config");
    let profiles = home.path().join("profiles");
    std::fs::create_dir(&profiles).expect("profiles");
    std::fs::write(profiles.join("work.toml"), UNPAIRED_CONFIG).expect("work profile");
    std::fs::write(profiles.join("broken.toml"), "[harness").expect("broken profile");
    std::fs::write(profiles.join("Not A Profile.toml"), UNPAIRED_CONFIG).expect("stray file");
    std::fs::write(profiles.join("notes.txt"), "").expect("stray file");
    let _running = config::lock(&profiles.join("work.toml")).expect("work lock");

    let listed = list(&RoxdHome::at(home.path())).expect("list");

    assert_eq!(
        listed,
        vec![
            ListedConfig {
                profile: None,
                path: home.path().join("roxd.toml"),
                pairing: Pairing::Paired(HarnessId::TEST_A),
                serving: Serving::Stopped,
            },
            ListedConfig {
                profile: Some("broken".parse().expect("profile name")),
                path: profiles.join("broken.toml"),
                pairing: Pairing::Invalid,
                serving: Serving::Stopped,
            },
            ListedConfig {
                profile: Some("work".parse().expect("profile name")),
                path: profiles.join("work.toml"),
                pairing: Pairing::NotPaired,
                serving: Serving::Running,
            },
        ]
    );
}

#[test]
fn profiles_renders_an_aligned_table() {
    let rendered = render(&[
        ListedConfig {
            profile: None,
            path: PathBuf::from("/home/someone/.roxd/roxd.toml"),
            pairing: Pairing::NoConfig,
            serving: Serving::Stopped,
        },
        ListedConfig {
            profile: Some("work".parse().expect("profile name")),
            path: PathBuf::from("/home/someone/.roxd/profiles/work.toml"),
            pairing: Pairing::Paired(HarnessId::TEST_A),
            serving: Serving::Running,
        },
    ]);

    assert_eq!(
        rendered,
        "PROFILE    ROXD   HARNESS                               CONFIG\n\
         (default)  stopped  no config                             /home/someone/.roxd/roxd.toml\n\
         work       running  00000000-0000-0000-0000-0000004a125a  /home/someone/.roxd/profiles/work.toml\n"
    );
}
