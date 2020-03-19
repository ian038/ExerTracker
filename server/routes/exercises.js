const router = require('express').Router();
const { Exercise } = require('../db/sequelize');

//  GET all Exercises
router.route('/').get((req, res) => {
    Exercise.findAll()
            .then(users => res.json(users))
            .catch(err => res.status(400).json('Error' + err))
});

// GET specific Exercise


//  ADD new Exercise
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    Exercise.create({username, description, duration, date})
            .then(() => res.json('Created!'))
            .catch(err => res.status(400).json('Error' + err))
});

// UPDATE Exercise
router.route('/update/:id').post((req, res) => {
    Exercise.findOne({ where: { id: req.params.id } })
            .then(exercise => {
                exercise.username = req.body.username,
                exercise.description = req.body.description,
                exercise.duration = req.body.duration,
                exercise.date = req.body.date
            })
            .catch(err => res.status(400).json('Error' + err))
});

//  DELETE Exercise


module.exports = router;