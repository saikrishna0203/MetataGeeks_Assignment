# Express.js Middleware and Route Explanation

## Code

```javascript
const express = require("express");
const { format } = require("date-fns");

const app = express();

// Middleware for logging timestamp and requested URL
app.use((req, res, next) => {
  const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const requestedUrl = req.originalUrl;

  console.log(`[${timestamp}] Requested URL: ${requestedUrl}`);

  next();
});

// Example route for http://localhost:3000
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});



Usage
Install dependencies: npm install
Run the server: node app.js

Server Explanation
This Express.js application initializes a server on http://localhost:3000/. The code includes middleware that logs the timestamp and requested URL for every incoming request. The middleware utilizes the date-fns library to format the timestamp. The single route responds with "Hello, World!" for requests to the root URL ("/"). When the server is started, it listens on port 3000, and visiting http://localhost:3000/ triggers the middleware, logging the timestamp and requested URL in the console.