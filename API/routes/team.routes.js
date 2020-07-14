module.exports = app =>{

    const team = require('../controllers/team.controller')
   
    // CREATE a new team
    app.post("/team", team.create)

     // RETRIEVE all teams
     app.get("/team", team.findAll)

     // RETRIEVE a team with ID
     app.get("/team/:id", team.findOne)
 
     // UPDATE a team with teamId
     app.put("/team/:id", team.update)
 
     // DELETE a team with teamId
     app.delete("/team/:id", team.delete)
 
     // DELETE all teams
     app.delete("/team", team.deleteAll)
}