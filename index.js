const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello exprees");
});

app.listen(5000, () => {
  console.log("running on port:5000");
});
