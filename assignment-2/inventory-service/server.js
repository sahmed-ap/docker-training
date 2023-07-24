// imports
const express = require("express");
const morgan = require("morgan");
const amq = require("./producer.js");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.post("/inventory", (req, res) => {
  res.send("POST INVENTORY");
  amq.sendMessage(req.body);
});

app.listen(5000);
