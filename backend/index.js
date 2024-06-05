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

app.use("/api/signup", require('./routes/signup'));
app.use("/api/login", require('./routes/login'));
app.use("/api/addtocart", require('./routes/addtocart'));
app.use("/api/removefromcart", require('./routes/removefromcart'));
app.use("/api/create-checkout-session", require('./routes/create-checkout-session'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
