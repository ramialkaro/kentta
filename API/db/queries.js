// export database queries

const knex = require("./knex");
const { update, first } = require("./knex");

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
      return (
        knex("games")
          /* .join('team', function(){
                this.on('game.id','=','team.game_id').onNotIn('player_id',player_id)
            }) */
          .orderBy("startTime")
      );
    },
    getOne: function (id) {
      return knex("games").where({ id }).first();
    },
    create: function (game) {
      return knex("games").insert(game);
    },
    update: function (id, game) {
      return knex("games").where({ id }).update(gae);
    },
    delete: function (id) {
      return knex("games").where({ id }).del();
    },
  },

  team: {
    // [x] TODO first check if player has a game or "team" then
    checkTeam: function ({ game_id, player_id }) {
      return knex("teams").where({ game_id, player_id });
    },

    // [x] TODO get all games the i had been join them

    myGames: function ({ player_id }) {
      return knex("teams")
        .where({ player_id })
        .join("games", "team.game_id", "=", "game.id")
        .orderBy("startTime");
    },

    // [x] TODO case 1: Player already there, just passing game_id to get players OR team...
    getAll: function ({ game_id }) {
      return knex("teams")
        .where({ game_id })
        .join("games", "team.game_id", "=", "game.id")
        .join("players", "team.player_id", "=", "player.id");
    },

    // [x] TODO case 2: player not found in the table then inserting new one
    join: function (team) {
      return knex("teams").insert(team);
    },

    // [x] TODO case 3: Player want to leave from the game by deleting the ROW (player_id & game_id)
    leave: function ({ game_id, player_id }) {
      return knex("teams").where({ game_id, player_id }).del();
    },
  },
};
