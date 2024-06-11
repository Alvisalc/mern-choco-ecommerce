const { Users } = require('../utils');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// middleware to authericate user
const fetchUser = async (req, res, next) => {
  // get token from user
  const token = req.header('auth-token');
  // if token missing, send 401 error
  if (!token) {
    return res.status(401).send({ errors: 'Please use valid token' });
  }
  try {
    // Verify the token using the secret key and get the payload data
    const data = jwt.verify(token, 'secret_ecom');
    // search user from database by user id
    req.user = await Users.findById(data.user.id);
    // process to next function
    next();
  } catch (error) {
    res.status(401).send({ errors: 'Please use valid token' });
  }
};

// MAIN function to process request
const handler = async (req, res) => {
  // use fetchUser to auth the request
  await fetchUser(req, res, async () => {
    // check if the req is POST
    if (req.method === 'POST') {
      // find user data by user ID
      let userData = await Users.findOne({ _id: req.user.id });
      // update the cart data by incrementing the item count
      userData.cartData[req.body.itemId] += 1;
      // save the updated user data back to database
      await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
      // send a success response with updated cart data
      res.json({ success: true, cartData: userData.cartData });
    } else {
      // if req is not POST, send error 405
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};

module.exports = handler;
