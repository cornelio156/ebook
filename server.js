import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.error('Missing STRIPE_SECRET_KEY in environment');
  process.exit(1);
}
const stripe = new Stripe(stripeSecretKey);

// POST /api/create-checkout-session
// Body: { items: [{ name, amountUsd, quantity }], successUrl, cancelUrl }
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, successUrl, cancelUrl } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' });
    }

    const line_items = items.map((it) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: it.name },
        unit_amount: Math.round(Number(it.amountUsd) * 100),
      },
      quantity: it.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: successUrl || 'http://localhost:5173/?success=true',
      cancel_url: cancelUrl || 'http://localhost:5173/checkout?canceled=true',
    });

    return res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create session' });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
