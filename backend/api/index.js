const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("../utils");
require('dotenv').config();

const app = express();
app.use(express.json());
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

app.listen(3000, () => console.log("Server ready on port 3000."));


module.exports = app;

