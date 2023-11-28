# Express.js Blog App

This is a simple Express.js application with SQLite integration to manage a blog. It includes the creation of a 'post' table, insertion of initial values, and an API endpoint to retrieve a list of posts.

## Initialization

The code initializes the Express app, connects to an SQLite database named 'blog.db', and creates a 'post' table if it doesn't exist. Initial values are inserted into the 'post' table.

```javascript
const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const dbPath = path.join(__dirname, "blog.db");
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.run(`
      CREATE TABLE IF NOT EXISTS post (
        post_id INTEGER PRIMARY KEY,
        title TEXT,
        content TEXT,
        author TEXT
      );
    `);

    const insertValuesQuery = `
      INSERT INTO post (title, content, author)
      VALUES
        ('Post 1', 'Content of Post 1', 'Author 1'),
        ('Post 2', 'Content of Post 2', 'Author 2'),
        ('Post 3', 'Content of Post 3', 'Author 3');
    `;

    await db.run(insertValuesQuery);

    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.get("/posts", async (req, res) => {
  const getPostsQuery = `
      SELECT * FROM post;
    `;

  const posts = await db.all(getPostsQuery);
  res.json(posts);
});


Usage
To run the application, execute the following commands:
   npm install
   node app.js

The server will start at http://localhost:3000/.

API Endpoint
The application exposes an API endpoint to retrieve a list of posts:

Endpoint: GET /posts
Response: JSON array containing posts.
Output
When you visit http://localhost:3000/posts, the API will return a JSON array with the list of posts.

