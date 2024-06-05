const { Users } = require('../utils');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: 'Please use valid token' });
  }
  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = await Users.findById(data.user.id);
    next();
  } catch (error) {
    res.status(401).send({ errors: 'Please use valid token' });
  }
};

const handler = async (req, res) => {
  await fetchUser(req, res, async () => {
    if (req.method === 'POST') {
      let userData = await Users.findOne({ _id: req.user.id });
      if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.json({ success: true, cartData: userData.cartData });
      } else {
        res.status(400).json({ success: false, errors: 'Item not in cart' });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};

module.exports = handler;
