import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EbookDetails from './pages/EbookDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebook/:id" element={<EbookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </>
  )
}

export default App
