// imports
const express = require("express");
const morgan = require("morgan");
const amq = require("./producer.js");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.post("/billing", (req, res) => {
  console.log("CALL FROM BILLING SERVICE WITH REQUEST DATA", req.body);
  amq.sendMessage(req.body);
  res.send("POST BILLING");
});


app.listen(5002);
