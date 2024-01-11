const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
  res.sendFile('D:\Node Js\index.js')
});

server.listen(8080, function () {
  console.log("Systumm Hanged");
});
