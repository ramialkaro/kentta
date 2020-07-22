
// export database queries

const knex = require('./knex')

module.exports = {
    player: {
        getAll: function () {
            return knex('player')
        },
        getOne: function (email) {
            return knex('player').where({ email }).first()
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
    }

}