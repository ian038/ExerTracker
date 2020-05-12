const router = require('express').Router();
const { signUp, signIn, signOut } = require('../controllers/auth')

// sign up
router.post('/signup', signUp)

// sign in
router.post('/signin', signIn)

// sign out
router.get('/signout', signOut)

module.exports = router