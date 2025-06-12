const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// GET all books
router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// POST new book
router.post('/', async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
});

// PUT update book
router.put('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.update(req.body);
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE book
router.delete('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.destroy();
    res.json({ message: 'Book deleted' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = router;
