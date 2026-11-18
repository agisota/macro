-- The first-party bot rows were seeded under the product's old name. Their
-- display names come from bot_id's registry, but a stored name is what a row
-- read directly, or served by an environment without that registry, shows, so
-- bring the rows in step with what the product is called now. Handles and ids
-- stay as they are: `@macro` still reaches the bot.
UPDATE bots
SET name = 'Rox'
WHERE kind = 'system'
  AND name = 'Macro';

UPDATE bots
SET name = 'Rox Coder'
WHERE kind = 'system'
  AND name = 'Macro Coder';
