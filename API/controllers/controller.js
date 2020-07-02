var database = require('../models/db')

module.exports.getKentta = function(req, res){
    
    database().then(function(connection){
        connection.query('SELECT * FROM `pelaaja`')
    })

}