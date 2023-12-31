// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ! BILLING OPERATIONS
app.get("/billing", (req, res) => {
  res.send("GET BILLING");
});

app.post("/billing", (req, res) => {
  console.log("CALL FROM SHIPPING SERVICE WITH REQUEST DATA", req.body);
  res.send("POST BILLING");
});

app.put("/billing", (req, res) => {
  res.send("PUT BILLING");
});

app.delete("/billing", (req, res) => {
  res.send("DELETE BILLING");
});

app.listen(5006);
