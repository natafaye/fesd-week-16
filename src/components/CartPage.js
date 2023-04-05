import React from 'react'
import ProductCard from './ProductCard'

export default function CartPage({ cart }) {
  return (
    <div>
      { cart.map(p => <ProductCard product={p}/>)}
    </div>
  )
}
