const mysql = require('mysql');

require('dotenv').config();

const mySqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
});

mySqlConnection.connect((err) => {
    if(!err) {
        console.log('DB opened')
    } else {
        console.log('Error' + err)
    }
});

module.exports = mySqlConnection;