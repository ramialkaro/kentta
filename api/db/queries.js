
const knex = require("./knex");

module.exports = {
  player: {
    getAll: function () {
      return knex("players");
    },
    getOne: function (email) {
      return knex("players").where({ email }).first();
    },
    getOneById: function ({ id }) {
      return knex("players").where({ id }).first();
    },
    create: function (player) {
      return knex("players").insert(player);
    },
    update: function (id, player) {
      return knex("players").where({ id }).update(player);
    },
    delete: function (id) {
      return knex("players").where({ id }).del();
    },
  },

  game: {
    getAll: function () {
      return knex("games").orderBy("startTime");
    },
    getOne: function (id) {
      return knex("games").where({ id }).first();
    },
    create: function (game) {
      return knex("games").insert(game);
    },
    update: function (id, game) {
      return knex("games").where({ id }).update(game);
    },
    delete: function (id) {
      return knex("games").where({ id }).del();
    },
  },

  team: {
    // [x] TODO first check if player has a game or "team" then
    checkTeam: function ({ gameID, playerID }) {
      return knex("teams").where({ gameID, playerID });
    },

    // [x] TODO get all games the i had been join them

    myGames: function ({ playerID }) {
      return knex("teams")
        .where({ playerID })
        .join("games", "team.gameID", "=", "game.id")
        .orderBy("startTime");
    },

    // [x] TODO case 1: Player already there, just passing game_id to get players OR team...
    getAll: function ({ gameID }) {
      return knex("teams")
        .where({ gameID })
        .join("games", "team.gameID", "=", "game.id")
        .join("players", "team.playerID", "=", "player.id");
    },

    // [x] TODO case 2: player not found in the table then inserting new one
    join: function (team) {
      return knex("teams").insert(team);
    },

    // [x] TODO case 3: Player want to leave from the game by deleting the ROW (player_id & game_id)
    leave: function ({ gameID, playerID }) {
      return knex("teams").where({ gameID, playerID }).del();
    },
  },
};
