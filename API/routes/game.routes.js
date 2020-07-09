module.exports = app =>{

    const game = require('../controllers/game.controller')

    // CREATE a new game
    app.post("/game", game.create)

    // RETRIEVE all games
    app.get("/game", game.findAll)

    // RETRIEVE a game with ID
    app.get("/game/:gameId", game.findOne)

    // UPDATE a game with gameId
    app.put("/game/:gameId", game.update)

    // DELETE a game with gameId
    app.delete("/game/:gameId", game.delete)

    // DELETE all games
    app.delete("/game", game.deleteAll)
}