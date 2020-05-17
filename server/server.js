const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// Connect to routes
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth')

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('running on ' + port);
})