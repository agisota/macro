-- Carry the `macrod` -> `roxd` runtime rename into databases that already
-- applied it.
--
-- The rename was first applied in place to the migrations that introduced
-- these values (20260831201832_create_harnesses, 20261111230600_macro_computers).
-- That rewrote history sqlx checksums and databases already ran: they still
-- hold `kind = 'macrod'` rows, the old column default, the old checks and the
-- old enum label, while the edited files claim otherwise -- so sqlx refuses
-- to migrate them and new `'roxd'` writes would be rejected. Those files are
-- restored to their shipped bytes; this migration does the rename forward.
--
-- Constraint names stay exactly as shipped, so code and tests that name them
-- keep working. Every statement tolerates a database that already ran this
-- migration (or was created from the edited history): the drops find nothing,
-- the updates match nothing, and the re-added checks keep the same shape.

SET LOCAL lock_timeout = '5s';

-- `harnesses.kind`: the column-level check from the CREATE TABLE is named
-- `harnesses_kind_check`; the default is part of the column definition.
ALTER TABLE public.harnesses DROP CONSTRAINT IF EXISTS harnesses_kind_check;
UPDATE public.harnesses SET kind = 'roxd' WHERE kind = 'macrod';
ALTER TABLE public.harnesses ALTER COLUMN kind SET DEFAULT 'roxd';
ALTER TABLE public.harnesses
    ADD CONSTRAINT harnesses_kind_check CHECK (kind IN ('roxd'));

-- `agent_configs.harness`: the sentinel slug stored on a bound agent. The
-- column stays a text runtime slug ('in-memory', 'cursor', ..., 'roxd'); only
-- the check changes. Added NOT VALID and validated separately so the scan
-- does not hold an ACCESS EXCLUSIVE lock on a large table.
ALTER TABLE public.agent_configs
    DROP CONSTRAINT IF EXISTS agent_configs_harness_id_slug_check;
UPDATE public.agent_configs SET harness = 'roxd' WHERE harness = 'macrod';
ALTER TABLE public.agent_configs
    ADD CONSTRAINT agent_configs_harness_id_slug_check
        CHECK (harness_id IS NULL OR harness = 'roxd') NOT VALID;
ALTER TABLE public.agent_configs
    VALIDATE CONSTRAINT agent_configs_harness_id_slug_check;

-- `computer_timer_kind`: 'macrod_missing' is an enum label, not a check.
-- Renaming the label is the migration: PostgreSQL stores enum values by OID,
-- so every existing timer reads as 'roxd_missing' afterwards with no row
-- rewrite and no default to change. Guarded because RENAME VALUE has no
-- IF EXISTS form.
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        JOIN pg_namespace n ON n.oid = t.typnamespace
        WHERE n.nspname = 'public'
          AND t.typname = 'computer_timer_kind'
          AND e.enumlabel = 'macrod_missing'
    ) THEN
        ALTER TYPE public.computer_timer_kind
            RENAME VALUE 'macrod_missing' TO 'roxd_missing';
    END IF;
END
$$;

-- Attachment content ids carry a second renamed literal. Runtime SQL and Rust
-- now build `<id>@attachments.rox.one` (crates/email), while rows written
-- before the rename hold `<id>@attachments.macro.com`. Comparisons trim
-- angle brackets (`trim(both '<>' from …)`), so a stored value may be bare or
-- bracketed; only the domain literal moves, and values that do not contain it
-- are left alone. No index covers these columns, so the plain updates are
-- unproblematic for the first two tables.
UPDATE public.email_attachments
   SET content_id = replace(content_id, '@attachments.macro.com', '@attachments.rox.one')
 WHERE content_id LIKE '%@attachments.macro.com%';

UPDATE public.email_attachments_drafts
   SET content_id = replace(content_id, '@attachments.macro.com', '@attachments.rox.one')
 WHERE content_id LIKE '%@attachments.macro.com%';

-- `email_draft_attachment_removals` is UNIQUE on (message_id, content_id), so
-- a message may already carry the renamed id next to the stale one; rewriting
-- the stale row in place would collide. Drop the superseded row first: both
-- rows record the removal of the same attachment, so the intent survives.
DELETE FROM public.email_draft_attachment_removals stale
 WHERE stale.content_id LIKE '%@attachments.macro.com%'
   AND EXISTS (
       SELECT 1
       FROM public.email_draft_attachment_removals renamed
       WHERE renamed.message_id = stale.message_id
         AND renamed.id <> stale.id
         AND renamed.content_id =
             replace(stale.content_id, '@attachments.macro.com', '@attachments.rox.one')
   );

UPDATE public.email_draft_attachment_removals
   SET content_id = replace(content_id, '@attachments.macro.com', '@attachments.rox.one')
 WHERE content_id LIKE '%@attachments.macro.com%';

-- The stored function from 20261015141418 builds the same domain for draft
-- attachments with a null content_id and for forwarded ids. It is a database
-- object, not source, so the reverted migration leaves it on the old domain
-- and it would stop matching the migrated rows. Same signature, same body,
-- only the two literals change.
CREATE OR REPLACE FUNCTION public.email_draft_provider_attachment_ids(UUID, UUID)
RETURNS TABLE(attachment_id UUID) AS $$
SELECT a.id FROM email_attachments a
        JOIN email_messages m ON m.id=a.message_id WHERE m.id=$1 AND m.link_id=$2
        AND NOT EXISTS(SELECT 1 FROM email_draft_attachment_removals r WHERE r.message_id=m.id AND (r.provider_id=a.provider_attachment_id OR trim(both '<>' from r.content_id)=trim(both '<>' from a.content_id)))
        AND NOT EXISTS(SELECT 1 FROM email_attachments_drafts u WHERE u.draft_id=m.id AND trim(both '<>' from a.content_id)=COALESCE(trim(both '<>' from u.content_id),u.id::text||'@attachments.rox.one'))
        AND NOT EXISTS(SELECT 1 FROM email_attachments_fwd f JOIN email_attachments original ON original.id=f.attachment_id WHERE f.message_id=m.id AND (trim(both '<>' from a.content_id)=trim(both '<>' from original.content_id) OR trim(both '<>' from a.content_id)=f.attachment_id::text||'@attachments.rox.one'))
        UNION SELECT f.attachment_id FROM email_attachments_fwd f JOIN email_messages m ON m.id=f.message_id WHERE m.id=$1 AND m.link_id=$2
$$ LANGUAGE sql STABLE;

-- The column comment is a database object (surfaced by \d+ and by
-- information_schema), so the reverted source comment leaves it naming the
-- old runtime kind. Restate it with the new name.
COMMENT ON COLUMN public.agent_configs.auto_accept_permissions IS
    'Whether the agent''s sessions approve ACP permission requests without asking. NULL defers to the runtime kind''s default: managed runtimes (cursor, in-memory, sandboxed coder) auto-accept, roxd prompts.';
