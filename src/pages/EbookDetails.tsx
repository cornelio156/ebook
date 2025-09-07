import { useParams, Link } from 'react-router-dom';
import { ebooks } from '../data/ebooks';
import { useCart } from '../context/CartContext';

export default function EbookDetails() {
  const { id } = useParams();
  const ebook = ebooks.find(e => e.id === id);
  const { addToCart } = useCart();
  if (!ebook) {
    return (
      <div className="container">
        <p>Livro não encontrado.</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="container details">
      <img src={ebook.coverUrl} alt={ebook.title} className="details-cover" />
      <div className="details-info">
        <h1>{ebook.title}</h1>
        <p className="author">{ebook.author}</p>
        <p className="desc">{ebook.description}</p>
        <div className="actions">
          <a href={ebook.pdfUrl} target="_blank" rel="noreferrer" className="btn alt">Ler amostra (PDF)</a>
          <button onClick={() => addToCart(ebook)} className="btn">Adicionar ao carrinho • ${ebook.priceUsd.toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
}


