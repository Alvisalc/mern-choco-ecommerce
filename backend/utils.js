const mongoose = require('mongoose');
require('dotenv').config();

const connectToDatabase = async () => {
  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;
  const uri = `mongodb+srv://${username}:${password}@cluster0.g9uwwfh.mongodb.net/mern-choco-ecommerce`;

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

const Users = mongoose.model("Users", {
  name: String,
  email: { type: String, unique: true },
  password: String,
  cartData: Object,
  date: { type: Date, default: Date.now },
});

module.exports = { connectToDatabase, Users };
