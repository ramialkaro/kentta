const Team = require('../models/team.model')


// create and save a team
exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not found by empty!"
        })
    }

    // CREATE a team
    const team = new Team({
        name: req.body.name,
        icon: req.body.icon,
    })

    Team.create(team, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the team."
            })
        } else{
            res.send(data)
        }
    })
}