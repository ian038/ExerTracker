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

app.use('/api/exercise', exerciseRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

const port = process.env.PORT

// Handle production 
if(process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'))
    // handle SPA
    app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () => {
    console.log('running on ' + port);
})