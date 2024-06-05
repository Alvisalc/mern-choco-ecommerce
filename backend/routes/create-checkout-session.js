const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.lineItems,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
      });
      res.send({ id: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

module.exports = handler;
