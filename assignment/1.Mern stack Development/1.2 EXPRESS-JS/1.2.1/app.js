const express = require("express");
const { format } = require("date-fns");

const app = express();

app.use((req, res, next) => {
  const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const requestedUrl = req.originalUrl;

  console.log(`[${timestamp}] Requested URL: ${requestedUrl}`);

  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
