const mysql = require('./db')


// Team constructor

const Team = function (team) {
    this.ID = team.ID;
    this.name = team.name;
    this.icon = team.icon;
}

// create new team

Team.create = (newTeam, result)=>{
    mysql.query("INSERT INTO team SET ?", newTeam, (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(err, null)
            return
        }

        console.log("created team: ", {id: res.insertId, ...newTeam})
        result(null, {id: res.insertId, ...newTeam})
    })
}

module.exports = Team