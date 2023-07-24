// imports
const express = require("express");
const morgan = require("morgan");
const amq = require("./producer.js");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.post("/users", (req, res) => {
  amq.sendMessage(req.body)
  res.send("POST USERS");
});


app.listen(5003);
