const { User } = require('../db/sequelize')

exports.userById = (req, res, next, id) => {
    User.findByPk(id)
        .then(user => {
            if(!user) {
                return res.status(400).json({ error: 'User not found' })
            }
            req.profile = user
            next()
        })
        .catch(err => res.status(400).json({ error: 'User not found' })
    )
}

exports.read = (req, res) => {
    // Make sure we do not send password to client
    req.profile.password = undefined
    req.profile.salt = undefined
    res.json(req.profile)
}