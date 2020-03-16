const router = require('express').Router();
const mysqlConnection = require('../db/connection');


router.route('/').get((req, res) => {
    mysqlConnection.query('SELECT * from exercises', (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})

module.exports = router;