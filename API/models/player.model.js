const mysql = require('./db');

//constructor for Player...

const Player = function (player) {
    this.name = player.name;
    this.email = player.email;
    this.phone = player.phone;
    this.latitude = player.latitude;
    this.status = player.status;
    this.active = player.active;
    this.teamId = player.teamId;
    this.additionalInfo = player.additionalInfo;
}

// create new player

Player.create = (newPlayer, result) => {
    mysql.query("INSERT INTO player SET ?", newPlayer, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
            return
        }

        console.log("created player: ", { id: res.insertId, ...newPlayer })
        result(null, { playerId: res.insertId, ...newPlayer })
    })
}

// get one player 

Player.findById = (playerId, result) => {
    mysql.query(`SELECT * FROM player WHERE playerId = ${playerId}`, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
            return
        }

        if (res.length) {
            console.log("found player: ", res[0])
            result(null, res[0])
            return
        }

        //not found player with the id
        result({ kind: "not_found" }, null)
    })
}

// get all players 

Player.getAll = result => {
    mysql.query("SELECT * FROM player", (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }

        console.log("players: ", res)
        result(null, res)
    })
}

//update player by ID 

Player.updateById = (playerId, player, result) => {
    mysql.query("UPDATE player SET name = ?, email = ?  WHERE playerId  = ? ", [player.name, player.email, playerId], (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            //not found Player with the ID
            result({ kind: "not_found" }, null)
            return
        }

        console.log("updated player: ", { playerId: playerId, ...player })
        result(null, { playerId: playerId, ...player })
    })
}

// remove player by ID 

Player.remove = (playerId, result) => {
    mysql.query("DELETE FROM player WHERE playerId = ?", playerId, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            // not found player by ID 
            result({ kind: "not_found" }, null)
            return
        }

        console.log("deleted player with id: ", playerId)
        result(null, res)
    })
}

// remove all player

Player.removeAll = result => {
    mysql.query("DELETE FROM player", (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }

        console.log(`deleted ${res.affectedRows} player`)
        result(null, res)
    })
}

module.exports = Player;