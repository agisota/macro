-- Put the 20261106021950 rollout guards back so a rollback still rejects the
-- retired team switch. Consent tables and the other functions are not part of
-- this migration, so they are left alone.

SET LOCAL lock_timeout = '5s';

CREATE FUNCTION crm_disable_legacy_email_sharing() RETURNS TRIGGER
LANGUAGE plpgsql AS $$
BEGIN
    NEW.crm_enabled := FALSE;
    RETURN NEW;
END;
$$;

CREATE TRIGGER team_crm_settings_keep_email_sharing_disabled
BEFORE INSERT ON team_crm_settings
FOR EACH ROW WHEN (NEW.crm_enabled)
EXECUTE FUNCTION crm_disable_legacy_email_sharing();

CREATE FUNCTION crm_reject_legacy_team_switch() RETURNS TRIGGER
LANGUAGE plpgsql AS $$
BEGIN
    RAISE EXCEPTION USING ERRCODE = '55000',
        MESSAGE = 'Team CRM enablement is retired; use individual email consent';
END;
$$;

CREATE TRIGGER team_crm_settings_reject_legacy_switch
BEFORE UPDATE OF crm_enabled ON team_crm_settings
FOR EACH STATEMENT EXECUTE FUNCTION crm_reject_legacy_team_switch();
