const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Use cors pre-flight requests and body-parser built in express

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('running on ' + port);
})