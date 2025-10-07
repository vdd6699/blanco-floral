// backend/server.js
// Simple Node.js backend for Stripe PaymentIntent

const express = require('express');
const app = express();
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Endpoint to create PaymentIntent
app.post('/create-payment-intent', async (req, res) => {
  try {
    // You can get amount, currency, and metadata from req.body if needed
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 23497, // $234.97 in cents, adjust as needed
      currency: 'usd'
      // Không truyền setup_future_usage để tắt checkbox lưu thẻ
      // metadata: {order_id: '1234'}
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Stripe backend running on port ${PORT}`));
