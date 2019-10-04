const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/teatime", (req, res) => {
  res.status(418);
  res.setHeader("X-message", "yo i'm a teapot");
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
