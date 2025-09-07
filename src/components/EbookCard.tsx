import { Link } from 'react-router-dom';
import type { Ebook } from '../data/ebooks';
import { useCart } from '../context/CartContext';

export function EbookCard({ ebook }: { ebook: Ebook }) {
  const { addToCart } = useCart();
  return (
    <div className="ebook-card">
      <Link to={`/ebook/${ebook.id}`} className="cover-wrap">
        <img src={ebook.coverUrl} alt={ebook.title} loading="lazy" />
      </Link>
      <div className="info">
        <h3 className="title">
          <Link to={`/ebook/${ebook.id}`}>{ebook.title}</Link>
        </h3>
        <p className="author">{ebook.author}</p>
        <div className="bottom">
          <span className="price">${ebook.priceUsd.toFixed(2)}</span>
          <button onClick={() => addToCart(ebook)} className="btn">Adicionar</button>
        </div>
      </div>
    </div>
  );
}


