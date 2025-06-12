const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/books.db' // Creates local SQLite file
});

module.exports = sequelize;
