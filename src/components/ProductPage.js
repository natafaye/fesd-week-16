import React from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function ProductPage({ productList, addToCart }) {

  const { productId } = useParams()

  const product = productList.find(p => p.id === parseInt(productId))
  
  return (
    <div>
      { product.name }
      <Button variant="success" onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
  )
}
