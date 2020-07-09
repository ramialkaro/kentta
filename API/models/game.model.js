const mysql = require('./db')

// game contructor...

const Game = function (game) {
    this.startTime = game.startTime;
    this.endTime = game.endTime;
    this.gameId = game.gameId;
    this.pitchId = game.pitchId;
    this.results = game.results;
}


// create new game

Game.create = (newGame, result)=>{
    mysql.query("INSERT INTO game SET ?", newGame, (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(err, null)
            return
        }

        console.log("created game: ", {id: res.insertId, ...newGame})
        result(null, {gameId: res.insertId, ...newGame})
    })
}


// get one game 

Game.FindById = (gameId, result)=> {
    mysql.query(`SELECT * FROM game WHERE gameId = ${gameId}`,(err,res)=>{
        if(err){
            console.log("error: ", err)
            result(err, null)
        }

        if(res.length){
            console.log("found game: ", res[0])
            result(null, res[0])
            return
        }

        // not found game with the id
        result({kind: "not_found"}, null)
    })
}


// get all games

Game.getAll= result=>{
    mysql.query("SELECT * FROM game",(err, res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return
        }

        console.log("Game: ", res)
        result(null, res)
    })
}


// update game result by ID

Game.updateById =(gameId, game, result)=>{
    mysql.query("UPDATE game SET results = ? WHERE gameId = ?", [game.results, gameId], (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return
        }

        if(res.affectedRows == 0){
            // not found game with the ID
            result({kind: "not_found"}, null)
            return
        }

        console.log("updated game: ", {gameId: game.gameId, ...game})
        result(null, {gameId:gameId, ...game})
    })
}

// remove game by ID

Game.remove = (gameId, result)=>{
    mysql.query("DELETE FROM game WHERE gameId = ?", gameId, (err,res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return
        }

        if(res.affectedRows == 0 ) {
            // not found game by the ID
            result({kind: "deleted game with id: ", gameId})
        }

        console.log("deleted game with id: ", gameId)
        result(null, res)
    })
}

Game.removeAll = result => {
    mysql.query("DELETE FROM game", (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
        }
        console.log(`deleted ${res.affectedRows} player`)
        result(null, res)
    })
}
module.exports = Game