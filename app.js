const express = require('express');
const sequelize = require('./database');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Store API!');
});


sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
});
