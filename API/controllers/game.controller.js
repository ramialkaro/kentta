const Game = require('../models/game.model')


// create and save a game 
exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not found by empty!"
        })
    }

    // CREATE a game
    const game = new Game({
        startTime: req.body.startTime,
        results: req.body.results,
        gameShortID : req.body.gameShortID,
        location : req.body.location
    })

    Game.create(game, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the game."
            })
        } else{
            res.send(data)
        }
    })
}



// Retrieve all games from the database.
exports.findAll = (req, res)=>{
    Game.getAll((err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving a game."
            })
        } else{
            res.send(data)
        }
    })
}


//find a single game with gameId
exports.findOne = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not be empty"
        })
    }

    Game.findById(req.params.gameId, (err, data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found a game with Id ${req.params.gameId}`
                })
            } else{
                res.status(500).send({
                    message: `Error retrieving a game with id ${req.params.gameId}`
                })
            }
        } else{
            res.send(data)
        }
    })
}


// UPDATE a game identified by the gameId in the request
exports.update =(req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not be empty!"
        })
    }

    Game.updateById(req.params.gameId, new Game(req.body), (err,data)=>{
        if(err){
            if(err.kind ="not_found"){
                res.status(404).send({
                    message: `Not found game with id ${req.params.gameId}`
                })
            } else{
                res.status(500).send({
                    message: `Error update game with id ${req.params.gameId}`
                })
            }
        }else{
            res.send(data)
        }
    })
}



// DELETE a single game from database
exports.delete =(req, res)=>{
    Game.remove(req.params.gameId, (err, data)=>{
        if(err){
            if(err.kind ==="not_found"){
                res.status(404).send({
                    message: `Not found with id ${req.params.gameId}`
                })
            }else{
                res.status(500).send({
                    message: `Cloud not delete game with id ${req.params.gameId}`
                })
            }
        } else{
            res.send({message: `Game with id ${req.params.gameId} deleted successfully!`})
        }
    })
}



// DELETE all game from database
exports.deleteAll =(req, res )=>{
    Game.removeAll((err, data)=>{
        if(err){
            res.status(500).send({

            })
        } else{
            res.send({message: `All games deleted successfully!`})
        }
    })
}