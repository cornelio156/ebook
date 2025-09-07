import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { state, increment, decrement, removeFromCart, totalUsd } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="container">
        <h1 className="page-title">Carrinho</h1>
        <p>Seu carrinho está vazio.</p>
        <Link to="/" className="btn">Voltar às lojas</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Carrinho</h1>
      <div className="cart-list">
        {state.items.map(({ ebook, quantity }) => (
          <div className="cart-item" key={ebook.id}>
            <img src={ebook.coverUrl} alt={ebook.title} />
            <div className="meta">
              <h3>{ebook.title}</h3>
              <p className="author">{ebook.author}</p>
              <div className="controls">
                <button onClick={() => decrement(ebook.id)}>-</button>
                <span className="qty">{quantity}</span>
                <button onClick={() => increment(ebook.id)}>+</button>
                <button className="link" onClick={() => removeFromCart(ebook.id)}>Remover</button>
              </div>
            </div>
            <div className="line-total">${(ebook.priceUsd * quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">Total: ${totalUsd.toFixed(2)}</div>
        <div className="actions">
          <Link to="/checkout" className="btn">Finalizar compra</Link>
          <Link to="/" className="btn alt">Continuar comprando</Link>
        </div>
      </div>
    </div>
  );
}


