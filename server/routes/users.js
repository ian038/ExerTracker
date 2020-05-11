const router = require('express').Router();
const { User } = require('../db/sequelize');

// GET all users 
router.route('/').get((req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err))
});

// ADD user
router.route('/add').post((req, res) => {
    const user = new User(req.body)

    user.save()
        .then(() => res.json('User created!'))
        .catch(err => res.status(400).json('Error ' + err))
});

// DELETE user
router.route('/:id').delete((req, res) => {
    User.findByPk(req.params.id)
    .then(user => user.destroy()
                              .then(() => res.json('User deleted!'))
                              .catch(err => res.status(400).json('Error ' + err)))
    .catch(err => res.status(400).json('Error' + err))
});

module.exports = router