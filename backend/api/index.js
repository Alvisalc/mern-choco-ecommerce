const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("../utils");
require('dotenv').config();

const app = express();
app.use(express.json());

// Allow requests from your frontend URL
const allowedOrigins = process.env.PRODUCTION_URL;
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.use("/api/signup", require('./signup'));
app.use("/api/login", require('./login'));
app.use("/api/addtocart", require('./addtocart'));
app.use("/api/removefromcart", require('./removefromcart'));
app.use("/api/create-checkout-session", require('./create-checkout-session'));
app.use("/api/home", require('./home'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ready on port ${port}.`);
});

module.exports = app;
