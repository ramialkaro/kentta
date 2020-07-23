require('dotenv').config()
const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const { withJWTAuthMiddleware } = require('express-kun')
const protectedRouter = withJWTAuthMiddleware(router, process.env.JWT_SECRET)


// TODO: Retrieve all games from database
protectedRouter.get('/game', async (req, res) => {
    try {
        res.cookie('foo','bar',{
            sameSite:true
        })
        const games = await queries
            .game
            .getAll()
        if (games) {
            res.status(200).json(games)
        } else {
            res.status(404).json({ msg: "Games not found in the database" })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


// TODO: Retrieve a single game from database using id
protectedRouter.get('/game/:id', async (req, res) => {
    try {
        const game = await queries
            .game
            .getOne(req.params.id)

        if (game) {
            res.status(200).json(game)
        } else {
            res.status(404).json({ msg: `Game can not found by this id ${req.params.id}` })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// TODO: Created a game 
protectedRouter.post('/game', async (req, res) => {
    try {
        const newGame = await queries
            .game
            .create(req.body)
        if (newGame) {
            res.status(200).json(newGame)
        } else {
            res.status(404).json({ msg: `some error ocorred while create the game with details ${req.body}` })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


// TODO: update a single game by the id
protectedRouter.put('/game/:id', async (req, res) => {
    try {
        const existGame = await queries
            .game
            .getOne(req.params.id)
        if (existGame) {
            const updatedGame = await queries
                .game
                .update(req.params.id, req.body)
            if (updatedGame) {
                res.status(200).json("game updated successfully")
            }
        } else {
            res.status(404).json({ msg: `game can not udpate by this is id ${req.params.id}` })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// TODO: delete a single game by the id
protectedRouter.delete('/game/:id', async (req, res) => {
    try {
        const existGame = await queries
            .game
            .getOne(req.params.id)
        if (existGame) { 
            const deletedGame = await queries
                .game
                .delete(req.params.id)
            if (deletedGame) {
                res.status(200).json("game delete successfully")
            }
        } else {
            res.status(404).json({ msg: `game can not found by this id ${req.params.id}` })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

module.exports = router         