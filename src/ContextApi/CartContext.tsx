import React, { createContext, useReducer, ReactNode } from 'react'

type Product = {
  id: number
  name: string
  price: number
}

type CartState = {
  products: Product[]
  cart: Product[]
}

// Action types
type CartAction = { type: 'ADD_TO_CART'; payload: Product } | { type: 'REMOVE_FROM_CART'; payload: number }

// Initial state
const initialState: CartState = {
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ],
  cart: [],
}

// Create context
const CartContext = createContext<
  | {
      state: CartState
      addToCart: (product: Product) => void
      removeFromCart: (id: number) => void
    }
  | undefined
>(undefined)

// Reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    default:
      return state
  }
}

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  return <CartContext.Provider value={{ state, addToCart, removeFromCart }}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider }
