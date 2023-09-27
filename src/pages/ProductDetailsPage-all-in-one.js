import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetailsPage() {
  // Very common pattern
  // 3 pieces of state
  // 1 for the data
  // 1+ for if we're in progress of talking to the backend about it (loading, deleting)
  // 1 for if there was any error message about talking to the backend
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  let { productId } = useParams()
  productId = parseInt(productId) // because URL params are strings, and we want a number

  useEffect(() => {
    async function fetchProduct() {
      // set loading to true before you make the request
      setLoading(true)
      const response = await fetch("http://localhost:3005/products/" + productId)
      if(!response.ok) {
        // Outcome 1: Something went wrong
        setProduct(null)
        setErrorMessage(response.statusText)
        // set loading to false when it's all done
        setLoading(false)
        return
      }
      const data = await response.json()
      // Outcome 2: Everything went good
      setProduct(data)
      setErrorMessage(null)
      // set loading to false when it's all done
      setLoading(false)
    }
    fetchProduct() // we just have to do this because useEffect doesn't want to touch asynchronous stuff
  }, [])

  // Conditional Rendering based on 3 pieces of state: error, loading, have the data

  if(errorMessage) {
    return <div>Couldn't find that product.<br/>{errorMessage}</div>
  }

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  )
}