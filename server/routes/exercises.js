const router = require('express').Router();
const { Exercise } = require('../db/sequelize');

//  GET all Exercises
router.route('/').get((req, res) => {
    Exercise.findAll()
            .then(exercises => res.json(exercises))
            .catch(err => res.status(400).json('Error' + err))
});

// GET specific Exercise
router.route('/:id').get((req, res) => {
    Exercise.findByPk(req.params.id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(400).json('Error' + err))
});

//  ADD new Exercise
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username, description, duration, date})

    newExercise.save()
                .then(() => res.json('Created!'))
                .catch(err => res.status(400).json('Error' + err))
});

// UPDATE Exercise
router.route('/update/:id').post((req, res) => {
    Exercise.findByPk(req.params.id)
            .then(exercise => {
                exercise.username = req.body.username,
                exercise.description = req.body.description,
                exercise.duration = req.body.duration,
                exercise.date = req.body.date

                exercise.save()
                        .then(() => res.json('Exercise updated!'))
                        .catch(err => res.status(400).json('Error ' + err))
            })
            .catch(err => res.status(400).json('Error' + err))
});

//  DELETE Exercise
router.route('/:id').delete((req, res) => {
    Exercise.findByPk(req.params.id)
    .then(exercise => exercise.destroy()
                              .then(() => res.json('Exercise deleted!'))
                              .catch(err => res.status(400).json('Error ' + err)))
    .catch(err => res.status(400).json('Error' + err))
});

module.exports = router;