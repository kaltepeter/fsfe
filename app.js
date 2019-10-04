const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/teatime", (req, res) => {
  res.status(418);
  res.setHeader("X-message", "yo i'm a teapot");
  let resHtml = "<!DOCTYPE html>";
  resHtml += "<html><head>";
  resHtml +=
    '<script src="https://kit.fontawesome.com/40d41ae67d.js" crossorigin="anonymous"></script></head>';
  resHtml +=
    '<body style="font-size: 30px;margin: 5em;text-align: center;color:#E64A19;background-color:#FFE082;">';
  resHtml += '<i class="fas fa-10x fa-mug-hot"></i>';
  resHtml += "</body></html>";
  res.end(resHtml);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
