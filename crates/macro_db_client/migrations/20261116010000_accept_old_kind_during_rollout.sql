-- Let the previous release keep running while the rename rolls out.
--
-- 20261116000000 rewrites `macrod` to `roxd` and then narrows the checks and
-- the enum to the new spelling. Deploys run migrations *before* services
-- (docs/development/database.md), so during the rolling deploy old tasks are
-- still serving: they write `kind = 'macrod'` on enrollment, `harness =
-- 'macrod'` on a bound agent and `'macrod_missing'` on a missing computer.
-- Against the narrowed checks every one of those writes fails, so enrollment
-- and missing-computer timers break until the last old task stops.
--
-- This migration widens the three value sets to accept both spellings. The new
-- code writes `roxd` only, so the old spelling stops appearing as soon as the
-- rollout finishes; narrowing the checks back to `('roxd')` belongs to a
-- follow-up migration shipped in a later release, once no old task can run.
--
-- Constraint names and shapes stay as shipped; `agent_configs` is large, so its
-- check is added NOT VALID and validated separately.

SET LOCAL lock_timeout = '5s';

ALTER TABLE public.harnesses DROP CONSTRAINT IF EXISTS harnesses_kind_check;
ALTER TABLE public.harnesses
    ADD CONSTRAINT harnesses_kind_check CHECK (kind IN ('roxd', 'macrod'));

ALTER TABLE public.agent_configs
    DROP CONSTRAINT IF EXISTS agent_configs_harness_id_slug_check;
ALTER TABLE public.agent_configs
    ADD CONSTRAINT agent_configs_harness_id_slug_check
        CHECK (harness_id IS NULL OR harness IN ('roxd', 'macrod')) NOT VALID;
ALTER TABLE public.agent_configs
    VALIDATE CONSTRAINT agent_configs_harness_id_slug_check;

-- `ALTER TYPE ... ADD VALUE` cannot run inside a transaction block before
-- PostgreSQL 12 and is idempotent only through this guard. The label is only
-- ever written by the outgoing release; readers match `roxd_missing`.
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        JOIN pg_namespace n ON n.oid = t.typnamespace
        WHERE n.nspname = 'public'
          AND t.typname = 'computer_timer_kind'
          AND e.enumlabel = 'macrod_missing'
    ) THEN
        ALTER TYPE public.computer_timer_kind ADD VALUE 'macrod_missing';
    END IF;
END
$$;
