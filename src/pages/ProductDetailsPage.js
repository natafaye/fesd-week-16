import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetailsPage({ productList, loading }) {
  let { productId } = useParams()
  productId = parseInt(productId) // because URL params are strings, and we want a number

  const product = productList.find(p => p.id === productId)

  if(loading) {
    return <></>
  }

  if(!product) {
    return <div>Couldn't find product</div>
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  )
}