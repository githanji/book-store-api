const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  publishedDate: {
    type: DataTypes.DATE
  }
});

module.exports = Book;
