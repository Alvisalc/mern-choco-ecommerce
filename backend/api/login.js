const { Users } = require('../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      const passCompare = await bcrypt.compare(req.body.password, user.password);
      if (passCompare) {
        const data = { user: { id: user.id } };
        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token, cartData: user.cartData });
      } else {
        res.json({ success: false, errors: 'Wrong Password' });
      }
    } else {
      res.json({ success: false, errors: 'Wrong Email Id' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

module.exports = handler;
