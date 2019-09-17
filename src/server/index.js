import express from "express";
import createStore from "./store";
import renderer from "./renderer";

const app = express();

app.use(express.static("public"));
process.env.API_ENDPOINT = "http://localhost:9002";

const proxy = require("http-proxy-middleware");
app.use("/repositories", proxy({ target: process.env.API_ENDPOINT }));

app.get("*", (req, res, next) => {
  const store = createStore();
  renderer(req, res, next, store);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
