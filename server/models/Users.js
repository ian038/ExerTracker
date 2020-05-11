const bcrypt = require('bcrypt')

// default used by node.bcrypt.js is 10
const SALT_WORK_FACTOR = 10

module.exports = (sequelize, type) => {
    const User = sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            unique: true,
            allowNull: false
        },
        salt: type.STRING,
        password: {
            type: type.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: type.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        hooks: {
            // hash password before saving to database
            beforeCreate: user => {
                user.salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
                user.password = bcrypt.hashSync(user.password, user.salt)
            }
        },
        // validate password
        instanceMethods: {
            validatePassword: function(password) {
                return bcrypt.compare(password, this.password)
            }
        }
    })
    return User
}
