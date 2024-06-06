const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("../utils");
require('dotenv').config();

const app = express();
app.use(express.json());

// Allow requests from your frontend URL
app.use(cors());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.use("/api/signup", require('./signup'));
app.use("/api/login", require('./login'));
app.use("/api/addtocart", require('./addtocart'));
app.use("/api/removefromcart", require('./removefromcart'));
app.use("/api/create-checkout-session", require('./create-checkout-session'));

module.exports = app;
