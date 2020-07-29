require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { withJWTAuthMiddleware } = require('express-kun')
const queries = require('../db/queries')

const protectedRouter = withJWTAuthMiddleware(router, process.env.JWT_SECRET)

// Retrieve all players form database

protectedRouter.get('/player', async (req, res) => {
    try {
        const players = await queries
            .player
            .getAll()
        if (players) {
            res.status(200).json(players)
        } else {
            res.status(404).json({ msg: "Players not found" })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// Login a player 

router.post('/login', async (req, res) => {
    try {
        const player = await queries
            .player
            .getOne(req.body.email)
        if (player) {
            bcrypt.compare(req.body.password, player.password, (err, result) => {
                if (result === true) {
                    const token = jwt.sign({ player }, process.env.JWT_SECRET, { expiresIn: "24h" })
                    res.status(200).json({ player, token, msg: "login" })
                    console.log("logged")
                } else {
                    res.status(401).json({ msg: "unauthorized" })
                    console.log("incorrect password")
                }
            })
        } else {
            res.status(404).json({ msg: `the email not found` })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// Register a player and save it to database

router.post('/register', async (req, res) => {
    console.log(req.body)
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(req.body.password, salt)
    req.body.password = await hash
    try {
        let existPlayer = await queries
            .player
            .getOne(req.body.email)
        if (!existPlayer) {
            const newPlayer = await queries
                .player
                .create(req.body)
            if (newPlayer) {
                const token = jwt.sign({ newPlayer }, process.env.JWT_SECRET, { expiresIn: "24h" })
                res.status(200).json({ newPlayer: await queries.player.getOneById(newPlayer), token, msg: "register" })
            }

        } else {
            res.status(404).json({ msg: "already email used, try another one." })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


// Update a player and save it to database 

protectedRouter.put('/player/:id', async (req, res) => {
    try {
        const player = await queries
            .player
            .update(req.params.id, req.body)
        if (player) {
            res.status(200).json({ updated: player })
        } else {
            res.status(404).json({ msg: "Player not found " })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }

})

// Delete a player from database

protectedRouter.delete('/player/:id', async (req, res) => {
    try {
        const deletedPlayer = await queries
            .player
            .delete(req.params.id)
        if (deletedPlayer) {
            res.status(200).json({ msg: "Player deleted successfully" })
        } else {
            res.status(404).json({ msg: `Player not found by this id ${req.params.id}` })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }

})

module.exports = router