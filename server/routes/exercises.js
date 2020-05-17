const router = require('express').Router();
const { exerciseById, list, create, read, update, destroy } = require('../controllers/exercise')
const { requireSignIn, isAuth } = require('../controllers/auth')
const { userById } = require('../controllers/user')

//  GET all Exercises
router.get('/', list)

//  CRUD operations
router.post('/create/:userId', requireSignIn, isAuth, create)
router.get('/:exerciseId', read)
router.put('/update/:userId/:exerciseId', requireSignIn, isAuth, update)
router.delete('/delete/:userId/:exerciseId', requireSignIn, isAuth, destroy)


router.param('exerciseId', exerciseById)
router.param('userId', userById)

module.exports = router;