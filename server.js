const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cart", (req, res) => {
  res.send("Cart List");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
