const sequelize = require('../postgreSQL/db');
const {DataTypes} = require('sequelize');


const Books = sequelize.define('books', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    author: {type: DataTypes.STRING},
    genre: {type: DataTypes.STRING}
});

module.exports = {
    Books
}
