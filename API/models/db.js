const mysql = require("mysql");
const dbConfig = require('../config/db.config')

var conn = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  conn.query('SELECT * FROM `pelaaja`', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});
