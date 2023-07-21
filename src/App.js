import { Container } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/CartPage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid"
import AddProductPage from "./components/AddProductPage";
import Header from "./Header";
import { ThemeContext } from "./components/ThemeContext";

export default function App() {
  const [productList, setProductList] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [cartList, setCartList] = useState([])
  const [theme, setTheme] = useState("dark")

  const navigate = useNavigate()

  const addToCart = (productId) => {
    const cartItem = {
      id: uuid(), // another option to generate ids
      productId: productId,
      quantity: 1
    }
    setCartList([...cartList, cartItem])
    navigate("/cart")
  }

  const addProduct = async (newProductData) => {
    const response = await fetch("http://localhost:3004/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData)
    })
    const newProductWithId = await response.json()
    setProductList([...productList, newProductWithId])
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoadingProducts(true)
      const response = await fetch("http://localhost:3004/products")
      const data = await response.json()
      setProductList(data)
      setLoadingProducts(false)
    }
    fetchData()
  }, [])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Header />
      <Container>
        {loadingProducts ? <p>Loading...</p> :
          <Routes>
            <Route path="/" element={<HomePage productList={productList} addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage productList={productList} cartList={cartList} />} />
            <Route path="/products/:productId" element={<ProductDetailPage productList={productList} addToCart={addToCart} />} />
            <Route path="/products/create/new" element={<AddProductPage addProduct={addProduct} />} />
          </Routes>
        }
      </Container>
    </ThemeContext.Provider>
  )
}