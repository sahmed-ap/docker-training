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

// ! SHIPPING OPERATIONS
app.get("/shipping", (req, res) => {
  res.send("GET SHIPPING");
});

app.post("/shipping", (req, res) => {
  fetch('http://localhost:5002/biiling', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error: ' + response.status);
  })
  .then(jsonData => {
    console.log(jsonData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  res.send("POST SHIPPING");
});

app.put("/shipping", (req, res) => {
  res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
  res.send("DELETE SHIPPING");
});

app.listen(5009);
