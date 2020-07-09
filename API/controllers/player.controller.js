const Player = require('../models/player.model')
const { query } = require('express')

// Create and save a new player 
exports.create = (req, res) => {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            message: "content can not be empty!"
        })
    }

    // Create a player
    const player = new Player({
        name: req.body.name,
        email: req.body.email
    })

    // Save player in the database
    Player.create(player, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the player."
            })
        } else {
            res.send(data);
        }

    })
}



// Retrieve all players from the database. 
exports.findAll = (req, res) => {
    Player.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving player."
            })
        } else {
            res.send(data)
        }
    })
}



// Find a single player with playerId
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "content can not be empty"
        })
    }

    Player.findById(req.params.playerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found player with Id ${req.params.playerId}`
                })
            } else {
                res.status(500).send({
                    message: "Error retrieving player with id " + req.params.playerId
                })
            }
        } else {
            res.send(data)
        }

    })
}



// Update a player identified by the playerId in the request  
exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "content can not be empty!"
        })
    }


    Player.updateById(req.params.playerId, new Player(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found player with id ${req.params.playerId}`
                })
            } else {
                res.status(500).send({
                    message: "Error updating player with id " + req.params.playerId
                })
            }
        } else {
            res.send(data)
        }
    })
}



// Delete a player with specified playerId in the request 
exports.delete = (req, res) => {
    Player.remove(req.params.playerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found with id ${req.params.playerId}`
                })
            } else {
                res.status(500).send({
                    message: "Could not delete player with id" + req.params.playerId
                })
            }
        } else {
            res.send({ message: `Player was deleted successfully!` })
        }
    })
}



// Delete all players from the database.
exports.deleteAll = (req, res) => {
    Player.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all players"
            })
        } else {
            res.send({message: `all players were deleted successfully!`})
        }
    })
}
