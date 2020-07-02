module.exports = app => {

    const player = require("../controllers/player.controller")

    //Create a new player 
    app.post("/player", player.create)

    // Retrieve all players
    app.get("/player", player.findAll)

    // Retrieve a single player with playerId 
    app.get("/player/:playerId", player.findOne)

    // Update a player with playerId
    app.put("/player/:playerId", player.update)

    // Delete a player with playerId
    app.delete("/player/:playerId", player.delete)

    // Detele players
    app.delete("/player", player.deleteAll)
}