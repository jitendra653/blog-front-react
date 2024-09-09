import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const ProductList: React.FC = () => {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    return null
  }

  const { state, addToCart } = cartContext

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="space-y-4">
        {state.products.map((product) => (
          <li key={product.id} className="flex justify-between items-center">
            <span className="text-lg">
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
