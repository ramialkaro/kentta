CREATE TABLE "players" (
  "id" bigserial UNIQUE PRIMARY KEY,
  "firstname" varchar NOT NULL,
  "lastname" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "imageUrl" varchar,
  "password" varchar NOT NULL,
  "phone" varchar NOT NULL,
  "latitude" float,
  "longtude" float,
  "status" varchar NOT NULL DEFAULT 'avilable',
  "active" boolean NOT NULL,
  "additionalInfo" text,
  "createdAt" timestamptz DEFAULT (now())
);

CREATE TABLE "games" (
  "id" bigserial UNIQUE PRIMARY KEY,
  "gameType" varchar NOT NULL,
  "startTime" timestamptz NOT NULL DEFAULT (now()),
  "endTime" timestamptz NOT NULL DEFAULT (now()),
  "gameShortID" varchar,
  "location" varchar,
  "gameResult" varchar,
  "winTeamID" bigint
);

CREATE TABLE "teams" (
  "id" bigserial PRIMARY KEY,
  "name" varchar,
  "gameID" bigint,
  "playerID" bigint,
  "createdAt" timestamptz DEFAULT (now())
);

ALTER TABLE "games" ADD FOREIGN KEY ("winTeamID") REFERENCES "teams" ("id");

ALTER TABLE "teams" ADD FOREIGN KEY ("gameID") REFERENCES "games" ("id");

ALTER TABLE "teams" ADD FOREIGN KEY ("playerID") REFERENCES "players" ("id");

CREATE INDEX ON "players" ("id");

CREATE INDEX ON "teams" ("gameID", "playerID");
