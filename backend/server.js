const express = require("express");
// const dotenv = require('dotenv')
// dotenv.config({path:'./config.env'})
// const db = process.env.DATABASE;
const cors = require("cors");
const PORT = 5500;

const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
const middleware = (req, res, next) => {
  console.log("one");
  next();
};

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/about", middleware, (req, res) => {
  console.log("Two");
  res.send("hello about");
});

mongoose.connect(`mongodb://localhost:27017/Main`).then(() => {
  app.listen(PORT, () => {
    console.log(`running on port http://localhost:${PORT}`);
  });
});
