
// export database queries

const knex = require('./knex')
const { update, first } = require('./knex')

module.exports = {
    player: {
        getAll: function () {
            return knex('player')
        },
        getOne: function (email) {
            return knex('player').where({ email }).first()
        },
        getOneById: function (id) {
            return knex('player').where({ id }).select('id', 'firstname', 'lastname', 'email', 'phone', 'latitude', 'longitude', 'status', 'active', 'team_id', 'additionalInfo').first()
        },
        create: function (player) {
            return knex('player').insert(player)
        },
        update: function (id, player) {
            return knex('player').where({ id }).update(player)
        },
        delete: function (id) {
            return knex('player').where({ id }).del()
        }
    },

    game: {
        getAll: function () {
            return knex('game')
        },
        getOne: function (id) {
            return knex('game').where({ id }).first()
        },
        create: function (game) {
            return knex('game').insert(game)
        },
        update: function (id, game) {
            return knex('game').where({ id }).update(game)
        },
        delete: function (id) {
            return knex('game').where({ id }).del()
        }
    },

    team: {
        // [x] TODO first check if player has a game or "team" then 
        checkTeam: function ({ game_id, player_id }) {
            return knex('team')
                .where({ game_id, player_id })

        },

        // [x] TODO get all games the i had been join them

        myGames: function ({ player_id }) {
            return knex('team')
                .where({ player_id })
                .join('game', 'team.game_id', '=', 'game.id')
        },

        // [x] TODO case 1: Player already there, just passing game_id to get players OR team... 
        getAll: function ({ game_id }) {
            return knex('team')
                .where({ game_id })
                .join('game', 'team.game_id', '=', 'game.id')
                .join('player', 'team.player_id', '=', 'player.id')
        },

        // [x] TODO case 2: player not found in the table then inserting new one 
        join: function (team) {
            return knex('team').insert(team)
        },

        // [x] TODO case 3: Player want to leave from the game by deleting the ROW (player_id & game_id)
        leave: function ({ game_id, player_id }) {
            return knex('team').where({ game_id, player_id }).del()
        },

    }
}