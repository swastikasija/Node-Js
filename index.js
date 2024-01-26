const express = require("express");
const { data } = require("./data.js");
const app = express();

app.get("/", (req, res) => {
res.status(200).json({
  message: "App running",
})
});
app.get('/data/get', function (req, res) {
  try {
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    })
  }
})
app.listen(4000, () => {
  console.log("server started");
  console.log("Swastik here");
});

