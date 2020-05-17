const { User } = require('../db/sequelize');
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const jwt = require('jsonwebtoken')
require('../auth/passport')(passport, localStrategy, jwtStrategy, extractJwt)

exports.signUp = (req, res) => {
    const user = new User(req.body)

    user.save()
        .then(() => res.json('User created!'))
        .catch(err => res.status(400).json('Error ' + err))
}

exports.signIn = (req, res, next) => {
    passport.authenticate('local', (error, user) => {
        console.log(user)
        if(error || !user) {
            return res.status(400).json({ error: 'User is not registered. Please sign up.' })
        }
        // pass in session false to not save user info
        req.logIn(user, { session: false }, (error) => {
            console.log(user)
            if(error) {
                return res.status(401).json(error);
            }
        // generate a signed token with contents of user and return it in response
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        res.cookie('t', token, { expire: new Date() + 9999 })
        // return to client along user 
        const { id, username, email } = user
        return res.json({ token, user: { id, username, email } })
        })
    })(req, res, next)
}

exports.signOut = (req, res) => {
    res.clearCookie('t')
    res.json('Sign out success!')
}

exports.requireSignIn = passport.authenticate('jwt', { session: false })

exports.isAuth = (req, res, next) => {
    let user = req.profile.id == req.user
    if(!user) {
        return res.status(400).json({ error: 'Access denied' })
    }
    next()
}


