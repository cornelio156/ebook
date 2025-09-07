import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function Checkout() {
  const { state, totalUsd, clear } = useCart();
  const [paid, setPaid] = useState(false);

  const itemsSnapshot = useMemo(() => state.items, [state.items]);

  if (paid) {
    return (
      <div className="container">
        <h1 className="page-title">Obrigado pela compra!</h1>
        <p>Seus ebooks estão prontos para download:</p>
        <ul className="download-list">
          {itemsSnapshot.map(({ ebook }) => (
            <li key={ebook.id}>
              <a href={ebook.pdfUrl} target="_blank" rel="noreferrer">{ebook.title} (PDF)</a>
            </li>
          ))}
        </ul>
        <Link to="/" className="btn">Voltar à loja</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Checkout</h1>
      <div className="checkout-form">
        <div className="summary-inline">Total: ${totalUsd.toFixed(2)}</div>
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalUsd.toFixed(2),
                    currency_code: 'USD',
                  },
                  description: 'Ebooks purchase',
                },
              ],
            });
          }}
          onApprove={async (_data, actions) => {
            if (!actions?.order) return;
            await actions.order.capture();
            setPaid(true);
            clear();
          }}
          onError={() => {
            // Optionally, handle/display error state
            // For now, we keep the UI as-is
          }}
          disabled={totalUsd <= 0}
        />
      </div>
    </div>
  );
}


