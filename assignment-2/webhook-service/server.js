// imports
const express = require("express");
const morgan = require("morgan");
const amq = require("./reciever.js");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());


app.listen(5001, () => {
  amq.consumeMessage();
});
