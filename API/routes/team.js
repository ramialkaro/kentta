const express = require('express')
const queries = require('../db/queries')
const router = express.Router()




// TODO player already have a game then get list of player in same team
router.get('/mygames', async (req, res) => {
    try {
        const myGames = await queries
            .team
            .myGames(req.query)
        // TODO player's games list is not empty 
        if (myGames.length !== 0) {
            res.status(200).json(myGames)
        } else {
            res.status(404).json({ msg: "you don't have a game yet, plz join to one" })
        }

    } catch (err) {
        res.status(500).json({ msg: "unable to get my games " })
    }
})
// TODO player already have a game then get list of player in same team
router.get('/team', async (req, res) => {
    try {

        // check if player already in table
        const checking = await queries
            .team
            .checkTeam(req.query)


        if (checking.length !== 0) {
            const teams = await queries
                .team
                .getAll(req.query)
            if (teams) {
                res.status(200).json(teams)
            }
        } else {
            res.status(404).json({ msg: "you don't have a team, plz join to a team" })
        }

    } catch (err) {
        res.status(500).json({ msg: "unable to get teams" })
    }
})

// TODO join a game
router.post('/team', async (req, res) => {
    try {
        // TODO check if player already in table
        const checking = await queries
            .team
            .checkTeam(req.body)
        // TODO join ONCE and in case player press join game more than one, then can't join 
        if (!(Array.isArray(checking) && checking.length)) {
            const id = await queries
                .team
                .join(req.body)
            res.status(200).json(id)
        } else {
            res.status(404).json({ msg: "already in game" })
        }
    } catch (err) {
        res.status(500).json({ msg: "error to find my team" })
    }
})

// TODO leave a game
router.delete('/team', async (req, res) => {
    try {

        const id = await queries
            .team
            .leave(req.query)

        if (id) {
            res.status(200).json(id)
        } else {
            res.status(404).json({ msg: "already left the team" })
        }
    } catch (err) {
        res.status(500).json({ msg: "error while leaving a team" })
    }
})


module.exports = router