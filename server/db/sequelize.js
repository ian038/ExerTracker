const { Sequelize } = require('sequelize');

const UserModel = require('../models/Users');
const ExerciseModel = require('../models/Exercises')

require('dotenv').config();

const sequelize = new Sequelize(
    'heroku_73946c36a95b3b6',
    'b687cade63259a',
    '4576fac6', {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

const UserExercise = sequelize.define('user_exercise', {});
const User = UserModel(sequelize, Sequelize)
const Exercise = ExerciseModel(sequelize, Sequelize);

User.belongsToMany(Exercise, { through: UserExercise, unique: false })
Exercise.belongsToMany(User, { through: UserExercise, unique: false })

sequelize.sync({ force: false }).then(() => {
  console.log('Database and table created')
});

module.exports = {
  User, 
  Exercise
}