module.exports = app =>{

    const team = require('../controllers/team.controller')
   
    // CREATE a new team
    app.post("/team", team.create)
}