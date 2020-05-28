const router = require('express').Router();
const { signUp, signIn, signOut } = require('../controllers/auth')
const { userSignUpValidator } = require('../validator')

// sign up
router.post('/signup', userSignUpValidator, signUp)

// sign in
router.post('/signin', signIn)

// sign out
router.get('/signout', signOut)

module.exports = router