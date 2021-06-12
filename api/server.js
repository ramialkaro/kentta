require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const app = express()
const port = process.env.PORT || 5050

const player = require('./routes/player')
const game = require('./routes/game')
const map = require('./routes/map')
const team = require('./routes/team')

app.use(cors())

app.use(require('morgan')('dev'))
app.use(compression())
app.use(helmet())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(player)
app.use(game)
app.use(team)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})