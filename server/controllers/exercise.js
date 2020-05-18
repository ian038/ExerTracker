const { Exercise } = require('../db/sequelize');

exports.exerciseById = (req, res, next, id) => {
    Exercise.findByPk(id)
            .then(exercise => {
                if(!exercise) {
                    return res.status(400).json({ error: 'Exercise not found' })
                }
                req.exercise = exercise
                next()
            })
            .catch(error => res.status(400).json({ error: 'User not found' })
)}

exports.list = (req, res) => {
    Exercise.findAll()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error' + err))
}

exports.create = (req, res) => {
    const exercise = new Exercise(req.body)

    exercise.save()
            .then(() => res.json('Created!'))
            .catch(err => res.status(400).json('Error' + err))
}

exports.read = (req, res, id) => {
    res.json(req.exercise)
}

exports.update = (req, res) => {
    Exercise.findByPk(req.exercise.id)
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
}

exports.destroy = (req, res) => {
    Exercise.findByPk(req.exercise.id)
            .then(exercise => exercise.destroy()
                                      .then(() => res.json('Exercise deleted!'))
                                      .catch(err => res.status(400).json('Error ' + err)))
            .catch(err => res.status(400).json('Error' + err))
}