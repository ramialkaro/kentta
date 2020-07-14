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



// get one team 

Team.findById = (ID, result)=> {
    mysql.query(`SELECT * FROM team WHERE ID = ${ID}`,(err,res)=>{
        if(err){
            console.log("error: ", err)
            result(err, null)
        }

        if(res.length){
            console.log("found team: ", res[0])
            result(null, res[0])
            return
        }

        // not found team with the id
        result({kind: "not_found"}, null)
    })
}


// get all teams

Team.getAll= result=>{
    mysql.query("SELECT * FROM team",(err, res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return
        }

        console.log("Team: ", res)
        result(null, res)
    })
}


// update team result by ID

Team.updateById =(ID, team, result)=>{
    mysql.query("UPDATE team SET name = ? WHERE ID = ?", [team.name, ID], (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return
        }

        if(res.affectedRows == 0){
            // not found team with the ID
            result({kind: "not_found"}, null)
            return
        }

        console.log("updated team: ", {ID: team.ID, ...team})
        result(null, {ID:ID, ...team})
    })
}

// remove team by ID

Team.remove = (ID, result)=>{
    mysql.query("DELETE FROM team WHERE ID = ?", ID, (err,res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return
        }

        if(res.affectedRows == 0 ) {
            // not found team by the ID
            result({kind: "deleted team with id: ", ID})
        }

        console.log("deleted team with id: ", ID)
        result(null, res)
    })
}

Team.removeAll = result => {
    mysql.query("DELETE FROM team", (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
        }
        console.log(`deleted ${res.affectedRows} player`)
        result(null, res)
    })
}
module.exports = Team