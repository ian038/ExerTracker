const { Sequelize, Model, DataTypes } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    'root',
    'password', {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });