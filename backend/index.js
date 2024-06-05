const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./utils");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.use("/api/signup", require('./api/signup'));
app.use("/api/login", require('./api/login'));
app.use("/api/addtocart", require('./api/addtocart'));
app.use("/api/removefromcart", require('./api/removefromcart'));
app.use("/api/create-checkout-session", require('./api/create-checkout-session'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
