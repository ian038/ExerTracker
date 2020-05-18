const { User } = require('../db/sequelize');

module.exports = (passport, localStrategy, jwtStrategy, extractJwt) => {
    passport.use('local', new localStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {
        console.log(username)
        User.findOne({ where: { username: username } }).then(user => {
            if(!user) {
                return done(null, false, { message: 'User does not exist' })
            }
            if(!user.validatePassword(password)) {
                return done(null, false, { message: 'User and password do not match' })
            }
            return done(null, user, { message: 'Sign in successful' })
        })
    }))

    // verify user token
    passport.use(new jwtStrategy({
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    }, (token, done) => {
        try {
            return done(null, token.id)
        } catch(error) {
            done(error)
        }
    })) 
}