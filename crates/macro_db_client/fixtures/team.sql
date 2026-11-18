INSERT INTO "macro_user" ("id", "username", "email", "stripe_customer_id")
VALUES ('a1111111-1111-1111-1111-111111111111', 'test', 'test@rox.one', 'stripe_test'),
       ('a2222222-2222-2222-2222-222222222222', 'test2', 'test2@rox.one', 'stripe_test2'),
       ('a3333333-3333-3333-3333-333333333333', 'test3', 'test3@rox.one', 'stripe_test3'),
       ('a4444444-4444-4444-4444-444444444444', 'test4', 'test4@rox.one', 'stripe_test4');
INSERT INTO "User" (id, email, macro_user_id)
VALUES ('macro|test@rox.one', 'test@rox.one', 'a1111111-1111-1111-1111-111111111111'),
       ('macro|test2@rox.one', 'test2@rox.one', 'a2222222-2222-2222-2222-222222222222'),
       ('macro|test3@rox.one', 'test3@rox.one', 'a3333333-3333-3333-3333-333333333333'),
       ('macro|test4@rox.one', 'test4@rox.one', 'a4444444-4444-4444-4444-444444444444');

INSERT INTO team (id, name, owner_id)
VALUES ('11111111-1111-1111-1111-111111111111', 'team1', 'macro|test@rox.one');

INSERT INTO team_invite (id, email, team_id, team_role, invited_by, created_at, last_sent_at)
VALUES ('11111111-1111-1111-1111-111111111111', 'invite1@rox.one', '11111111-1111-1111-1111-111111111111', 'member', 'macro|test@rox.one', NOW(), NOW()),
       ('22222222-2222-2222-2222-222222222222', 'invite2@rox.one', '11111111-1111-1111-1111-111111111111', 'member', 'macro|test@rox.one', NOW(), NOW()),
       ('33333333-3333-3333-3333-333333333333', 'invite3@rox.one', '11111111-1111-1111-1111-111111111111', 'member', 'macro|test@rox.one', NOW(), NOW());

INSERT INTO team_user (user_id, team_id, team_role)
VALUES ('macro|test@rox.one', '11111111-1111-1111-1111-111111111111', 'owner'),
       ('macro|test2@rox.one', '11111111-1111-1111-1111-111111111111', 'member'),
       ('macro|test3@rox.one', '11111111-1111-1111-1111-111111111111', 'member'),
       ('macro|test4@rox.one', '11111111-1111-1111-1111-111111111111', 'admin');
