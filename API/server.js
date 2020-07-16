const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())

// parse requests of content-type: application/json
app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))




// to fix the 304 error code in the firefox, which its mean the cache-control has max-age of zero value
  app.disable('etag')


  
require("./routes/player.routes")(app)
require("./routes/game.routes")(app)
require("./routes/team.routes")(app)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})