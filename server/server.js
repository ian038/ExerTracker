const express = require('express');
const cors = require('cors');

const app = express();

// Use cors pre-flight requests and body-parser built in express
app.use(cors());
app.use(express.json());

// Connect to routes
const exerciseRouter = require('./routes/exercises');
// const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
// app.use('/users', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('running on ' + port);
})