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



// Retrieve all team from the database. 
exports.findAll = (req, res) => {
    Team.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving team."
            })
        } else {
            res.send(data)
        }
    })
}



//find a single team with id
exports.findOne = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not be empty"
        })
    }

    Team.findById(req.params.id, (err, data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found a team with Id ${req.params.id}`
                })
            } else{
                res.status(500).send({
                    message: `Error retrieving a team with id ${req.params.id}`
                })
            }
        } else{
            res.send(data)
        }
    })
}


// UPDATE a team identified by the id in the request
exports.update =(req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not be empty!"
        })
    }

    Team.updateById(req.params.id, new Team(req.body), (err,data)=>{
        if(err){
            if(err.kind ="not_found"){
                res.status(404).send({
                    message: `Not found team with id ${req.params.id}`
                })
            } else{
                res.status(500).send({
                    message: `Error update team with id ${req.params.id}`
                })
            }
        }else{
            res.send(data)
        }
    })
}



// DELETE a single team from database
exports.delete =(req, res)=>{
    Team.remove(req.params.id, (err, data)=>{
        if(err){
            if(err.kind ==="not_found"){
                res.status(404).send({
                    message: `Not found with id ${req.params.id}`
                })
            }else{
                res.status(500).send({
                    message: `Cloud not delete team with id ${req.params.id}`
                })
            }
        } else{
            res.send({message: `Team with id ${req.params.id} deleted successfully!`})
        }
    })
}



// DELETE all team from database
exports.deleteAll =(req, res )=>{
    Team.removeAll((err, data)=>{
        if(err){
            res.status(500).send({

            })
        } else{
            res.send({message: `All teams deleted successfully!`})
        }
    })
}