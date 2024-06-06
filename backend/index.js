const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./utils");
require('dotenv').config();

const app = express();
app.use(express.json());

// Allow requests from your frontend URL
app.use(cors(
    {
        origin: ["https://choco-ecommerce-react.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.use("/api/signup", require('./api/signup'));
app.use("/api/login", require('./api/login'));
app.use("/api/addtocart", require('./api/addtocart'));
app.use("/api/removefromcart", require('./api/removefromcart'));
app.use("/api/create-checkout-session", require('./api/create-checkout-session'));

module.exports = app;
