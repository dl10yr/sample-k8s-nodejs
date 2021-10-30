const express = require('express')
const app = express();

app.get("/", function (req, res, next) {
  res.json({
    hello: "world"
  })
})

const server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});