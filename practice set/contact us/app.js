// External modules
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1", req.method, req.url);
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 2", req.method, req.url);
  next();
});
// app.use((req, res, next) => {
//   console.log("Middleware 3", req.method, req.url);
//   res.send("Hello from Middleware 3");
// });
app.get("/", (req, res, next) => {
  console.log("Handling / for", req.method, req.url);
  res.send(`<h1>Hello from Middleware 3</h1>`);
});
app.get("/contact-us", (req, res, next) => {
  console.log("Handling / for contact Us", req.method, req.url);
  res.send(`<h1>Please give you details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="Email">
    <input type="text" name="message" placeholder="Message">
    <button type="submit">Submit</button>
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling / for contact Us", req.method, req.url);
  res.send(`<h1>Thank you for your message</h1>`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
