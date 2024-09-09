import React from 'react'
import { CartProvider } from './CartContext'
import ProductList from './ProductList'
import Cart from './Cart'

const ContextApi: React.FC = () => {
  return (
    <CartProvider>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart App</h1>
        <div className="grid grid-cols-2 gap-10">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  )
}

export default ContextApi
