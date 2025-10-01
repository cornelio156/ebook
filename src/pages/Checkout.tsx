// import { useMemo } from 'react';
// import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

export default function Checkout() {
  const { state, totalUsd } = useCart();

  // const itemsSnapshot = useMemo(() => state.items, [state.items]);

  // Optional: you can read URL params to show a success message after returning from Stripe

  return (
    <div className="container">
      <h1 className="page-title">Checkout</h1>
      <div className="checkout-form">
        <div className="summary-inline">Total: ${totalUsd.toFixed(2)}</div>
        <button
          className="btn"
          disabled={totalUsd <= 0}
          onClick={async () => {
            const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string;
            const stripe = await loadStripe(publishableKey);
            if (!stripe) return;

            // Call backend to create Checkout Session with dynamic prices
            const apiBase = (import.meta.env.VITE_API_URL as string) || '';
            const response = await fetch(`${apiBase}/api/create-checkout-session`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                items: state.items.map(({ ebook, quantity }) => ({
                  name: ebook.title,
                  amountUsd: ebook.priceUsd,
                  quantity,
                })),
                successUrl: `${window.location.origin}/?success=true`,
                cancelUrl: `${window.location.origin}/checkout?canceled=true`,
              }),
            });
            const data = await response.json();
            if (!response.ok) {
              console.error(data);
              alert('Falha ao criar sessão de pagamento.');
              return;
            }
            window.location.href = data.url as string;
          }}
        >
          Pagar com Stripe
        </button>
      </div>
    </div>
  );
}


