CREATE TABLE "players" (
  "id" bigserial UNIQUE PRIMARY KEY,
  "firstname" varchar NOT NULL,
  "latstname" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "phone" varchar NOT NULL,
  "latitude" float,
  "longtude" float,
  "status" boolean NOT NULL,
  "active" boolean NOT NULL,
  "additional_info" text
);

CREATE TABLE "games" (
  "id" bigserial UNIQUE PRIMARY KEY,
  "game_type" varchar NOT NULL,
  "start_time" timestamptz NOT NULL DEFAULT (now()),
  "end_time" timestamptz NOT NULL DEFAULT (now()),
  "game_short_id" varchar
);

CREATE TABLE "teams" (
  "id" bigserial PRIMARY KEY,
  "game_id" bigint NOT NULL,
  "player_id" bigint NOT NULL,
  "start_time" timestamptz NOT NULL DEFAULT (now()),
  "end_time" timestamptz NOT NULL DEFAULT (now()),
  "game_short_id" varchar
);

ALTER TABLE "teams" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "teams" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("id");

CREATE INDEX ON "players" ("id");

CREATE INDEX ON "teams" ("game_id");

CREATE INDEX ON "teams" ("player_id");

CREATE INDEX ON "teams" ("game_id", "player_id");
