-- 20261106021950 forced every new team_crm_settings row back to
-- crm_enabled = false and rejected any later change of that column. That
-- rollout guard is no longer wanted: a missing row means CRM is on, and
-- creating a team writes crm_enabled = true. Consent tables and the other
-- functions from that migration stay.
--
-- Dropping a trigger takes an exclusive lock, so do not wait forever behind
-- a settings writer.

SET LOCAL lock_timeout = '5s';

DROP TRIGGER IF EXISTS team_crm_settings_reject_legacy_switch ON team_crm_settings;
DROP FUNCTION IF EXISTS crm_reject_legacy_team_switch();

DROP TRIGGER IF EXISTS team_crm_settings_keep_email_sharing_disabled ON team_crm_settings;
DROP FUNCTION IF EXISTS crm_disable_legacy_email_sharing();
