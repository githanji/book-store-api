📚 Book Store API

A simple RESTful API for managing books in a store. Built with Node.js, Express, and SQLite.

🚀 Features

CRUD operations for books:

     GET /books – List all books

     POST /books – Add a new book

     PUT /books/:id – Update a book

     DELETE /books/:id – Delete a book

Uses SQLite as the database

Follows MVC structure

Includes error handling and validations

🧱 Book Schema

     {
          id: INTEGER (auto-increment),
          title: STRING,
          author: STRING,
          price: INTEGER,
          publishedDate: DATE
    }


🛠️ Tech Stack

   Node.js
   
   Express.js
   
   SQLite (via Sequelize ORM)
   
   Nodemon (for dev)
    

📦 Installation & Setup

1. Clone the repository
   
        git clone https://github.com/YOUR_USERNAME/book-store-api.git
   
        cd book-store-api

2. Install dependencies

        npm install

3. Run the server

        npm run dev

4. The server will start on http://localhost:5000


🔁 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/books`     | Get all books     |
| POST   | `/books`     | Add new book      |
| PUT    | `/books/:id` | Update book by ID |
| DELETE | `/books/:id` | Delete book by ID |


🧪 Sample POST Body

        {
           "title": "Atomic Habits",
           "author": "James Clear",
           "price": 399,
           "publishedDate": "2018-10-16"
        }


📬 Postman Collection

A Postman collection is available in this repo at:

       postman/BookStoreAPI.postman_collection.json
