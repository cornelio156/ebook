import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import './index.css'
import App from './App.tsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'REPLACE_WITH_YOUR_CLIENT_ID', currency: 'USD' }}>
        <CartProvider>
          <App />
        </CartProvider>
      </PayPalScriptProvider>
    </BrowserRouter>
  </StrictMode>,
)
