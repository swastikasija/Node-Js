const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello Express")
});

server.listen(8080, function () {
  console.log("Systumm Hanged");
});
