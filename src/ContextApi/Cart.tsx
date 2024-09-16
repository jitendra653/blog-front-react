import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    return null
  }

  const { state, removeFromCart } = cartContext

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {state.cart.length > 0 ? (
          state.cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span className="text-lg">
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </ul>
    </div>
  )
}

export default Cart
