require('dotenv').config()

const express = require('express')
const {withJWTAuthMiddleware} = require('express-kun')
const router = express.Router()

const protectedRouter = withJWTAuthMiddleware(router, process.env.JWT_SECRET)

module.exports = protectedRouter
