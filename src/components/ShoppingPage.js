import React from 'react'
import ProductCard from './ProductCard'

export default function ShoppingPage({ productList }) {
  return (
    <div>
      { productList.map(product => <ProductCard product={product}/>)}
    </div>
  )
}
