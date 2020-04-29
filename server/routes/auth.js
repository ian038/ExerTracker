const router = require('express').Router();
const { User } = require('../db/sequelize');

// ADD user
router.route('/add').post((req, res) => {
    const username = req.body.username

    const newUser = new User({ username })

    newUser.save()
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