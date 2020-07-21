const express = require("express")
const session = require('express-session')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const passport = require('passport')
const initializePassport = require('./config/passport')
const PORT = 5000
const flash = require('express-flash')


app.use(cors())
// parse requests of content-type: application/json
app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


app.use(session({
  secret: 'kenttaSecure',
  name: 'cookie',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 2 * 1000 * 60,
    secure: true
  }
}))

app.use(flash())
initializePassport(passport)


app.use(passport.initialize())
app.use(passport.session())

app.post('/signup', passport.authenticate('local-signup', { failureFlash: true }))
app.post('/login', passport.authenticate('local-login', { failureFlash: true,successFlash:true, successRedirect:'/game' }))
app.get('/logout', function (req, res) {
  console.log('Log Out Route')
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
    }
    console.log('redirect')
    res.redirect('/')
  })
})

// to fix the 304 error code in the firefox, which its mean the cache-control has max-age of zero value
app.disable('etag')



require("./routes/player.routes")(app)
require("./routes/game.routes")(app)
require("./routes/team.routes")(app)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})