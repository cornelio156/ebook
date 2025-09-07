import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function NavBar() {
  const { state } = useCart();
  const count = state.items.reduce((n, i) => n + i.quantity, 0);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">Ebook Store</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Carrinho ({count})</Link>
        </nav>
      </div>
    </header>
  );
}


