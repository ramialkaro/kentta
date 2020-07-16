const mysql = require('./db')
const dateformat = require('dateformat')
// game contructor...

const Game = function (game) {
    this.startTime = game.startTime;
    this.endTime = game.endTime;
    this.results = game.results;
    this.gameShortID = game.gameShortID,
    this.location = game.location
}


// create new game

Game.create = (newGame, result)=>{
   
   newGame.startTime = dateformat(newGame.startTime, "yyyy-mm-dd HH:MM:ss")
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

Game.findById = (ID, result)=> {
    mysql.query(`SELECT * FROM game WHERE ID = ${ID}`,(err,res)=>{
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

Game.updateById =(ID, game, result)=>{
    mysql.query("UPDATE game SET results = ? WHERE ID = ?", [game.results, ID], (err, res)=>{
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

        console.log("updated game: ", {ID: game.ID, ...game})
        result(null, {ID:ID, ...game})
    })
}

// remove game by ID

Game.remove = (ID, result)=>{
    mysql.query("DELETE FROM game WHERE ID = ?", ID, (err,res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return
        }

        if(res.affectedRows == 0 ) {
            // not found game by the ID
            result({kind: "deleted game with id: ", ID})
        }

        console.log("deleted game with id: ", ID)
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