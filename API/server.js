require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5050


const player = require('./routes/player')
const game = require('./routes/game')



app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(player)
app.use(game)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})