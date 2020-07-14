const express = require("express")
const bodyParser = require("body-parser")


const app = express()
const PORT = 5000
// parse requests of content-type: application/json
app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
    res.json({ messsage: "welcome to Kentta application." })
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
require("./routes/player.routes")(app)
require("./routes/game.routes")(app)
require("./routes/team.routes")(app)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})