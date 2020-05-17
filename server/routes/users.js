const router = require('express').Router();
const { requireSignIn, isAuth } = require('../controllers/auth')
const { userById, read } = require('../controllers/user')

// Get specific user
router.get('/:userId' , requireSignIn, isAuth, read)

router.param('userId', userById)

module.exports = router