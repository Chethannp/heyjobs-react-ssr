// server.js
const express = require("express");
const stubServer = express();

var mapper = require("./mapping");
stubServer.use((req, res, next) => {
  console.log(`${req.method},${req.path}`);
  next();
});
stubServer.get("/repositories", (req, res) => {
  api = mapper.apis[0];
  res.jsonp(require(api.path));
});

stubServer.listen(9002, () => {
  console.log("JSON Server is running");
});
