const LocalStrategy = require('passport-local').Strategy
const bcrypt = require ('bcrypt')
const mysql = require('../models/db')
const Player = require('../models/player.model')

module.exports = function (passport) {


    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        console.log(user)
        done(null, user.ID)
    })

    //used to deserialized the user
    passport.deserializeUser(function (id, done) {
        console.log("something")
        mysql.query("select * from player where id = ?", id, function (err, rows) {
            done(err, rows[0])
        })
    })

    // LOCAL-SIGNUP 

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        async function (req, email, password, done) {
            let hashPassword =await function( password){
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
            }
            mysql.query("select * from player where email = ? ", email,function (err, rows) {
                console.log(req.sessionID)
                console.log(rows)
                console.log("Above is the taken object")
                if (err)
                    return done(err)
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage','That email is already is taken.'))
                } else {
                   let userPassword = hashPassword(password)
                    let player = new Player({
                        name: req.body.name,
                        email: req.body.email,
                        password: userPassword
                    })

                    player.name = "testing__passport"
                    var insertQuery = `INSERT INTO player (email, password) values ("${player.email}", "${player.password}")`
                    mysql.query(insertQuery, function (err, rows) {
                        player.ID = rows.insertId
                        console.log(rows)
                        return done(null, player)
                    })
                }
            })
        }))

    // LOCAL-LOGIN

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            mysql.query("select * from player where email = ? ", email, function (err, rows) {
                if (err) return done(err)
                if (!rows.length) {
                    return done(null, false, { message: 'Not user found' })
                }
                if (!(rows[0].password === password))
                    return done(null, false, { message: 'oops! wrong password' })
                else {
                    return done(null, rows[0], { message: 'logged in ' })
                }
            })
        }
    ))
}