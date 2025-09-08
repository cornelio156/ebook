import { createContext, useContext, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { Ebook } from '../data/ebooks';

export type CartItem = {
  ebook: Ebook;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD'; ebook: Ebook }
  | { type: 'REMOVE'; ebookId: string }
  | { type: 'INCREMENT'; ebookId: string }
  | { type: 'DECREMENT'; ebookId: string }
  | { type: 'CLEAR' };

const CartContext = createContext<{
  state: CartState;
  addToCart: (ebook: Ebook) => void;
  removeFromCart: (ebookId: string) => void;
  increment: (ebookId: string) => void;
  decrement: (ebookId: string) => void;
  clear: () => void;
  totalUsd: number;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.ebook.id === action.ebook.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.ebook.id === action.ebook.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ebook: action.ebook, quantity: 1 }] };
    }
    case 'REMOVE': {
      return { items: state.items.filter(i => i.ebook.id !== action.ebookId) };
    }
    case 'INCREMENT': {
      return {
        items: state.items.map(i =>
          i.ebook.id === action.ebookId ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    }
    case 'DECREMENT': {
      return {
        items: state.items
          .map(i =>
            i.ebook.id === action.ebookId ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter(i => i.quantity > 0),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalUsd = useMemo(
    () => state.items.reduce((sum, i) => sum + i.ebook.priceUsd * i.quantity, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      state,
      addToCart: (ebook: Ebook) => dispatch({ type: 'ADD', ebook }),
      removeFromCart: (ebookId: string) => dispatch({ type: 'REMOVE', ebookId }),
      increment: (ebookId: string) => dispatch({ type: 'INCREMENT', ebookId }),
      decrement: (ebookId: string) => dispatch({ type: 'DECREMENT', ebookId }),
      clear: () => dispatch({ type: 'CLEAR' }),
      totalUsd,
    }),
    [state, totalUsd]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}


