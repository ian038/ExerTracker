module.exports = (sequelize, type) => {
    return sequelize.define('exercise', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        description: type.STRING,
        duration: type.INTEGER,
        date: type.DATE
    })
}