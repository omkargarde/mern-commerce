require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("<h1>test</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
