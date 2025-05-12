// core modules
const http = require("http");

// External modules
const express = require("express");

// Local modules
const requestHandler = require("./user");

const app = express();

app.use("/",(req, res, next) => {
  console.log("Middleware 1", req.method, req.url);
  res.send("Hello from First Middleware");
  next();
});

app.use("/submit-details",(req, res, next) => {
  console.log("Middleware 2", req.method, req.url);
  res.send("Hello from Express");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
