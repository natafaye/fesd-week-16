import { Route, Routes } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage";
import Header from "./components/Header";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductForm from "./pages/ProductForm";
import EditProductPage from "./pages/EditProductPage";
import AddProductPage from "./pages/AddProductPage";

export default function App() {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      const response = await fetch("http://localhost:3005/products")
      if(!response.ok) {
        setProductList(null)
        setErrorMessage(response.statusText)
        setLoading(false)
        return
      }
      const data = await response.json()
      setProductList(data)
      setErrorMessage(null)
      setLoading(false)
    }
    fetchProduct()
  }, [])

  const addProduct = (newProductData) => {
    setLoading(true)
    // add on the backend

    setLoading(false)
    // add on the frontend
  }

  const updateProduct = (updatedProductData) => {
    setLoading(true)
    // add on the backend

    setLoading(false)
    // add on the frontend
  }

  return (
    <div>
      <Header/>
      <Container className="mt-4">
        { errorMessage ? <div className="text-danger">{errorMessage}</div> : null }
        { loading ? <div className="text-body-tertiary">Loading...</div> : null }
        <Routes>
          <Route path="/" element={<HomePage productList={productList}/>}/>{/* This matches nothing */}
          <Route path="/department" element={<DepartmentPage/>}/>
          <Route path="/shopping-cart" element={<ShoppingCartPage/>}/>
          <Route path="/products/details/:productId" element={<ProductDetailsPage productList={productList} loading={loading}/>}/>
          <Route path="/products/details/:productId/edit" element={<EditProductPage updateProduct={updateProduct} productList={productList}/>}/>
          <Route path="/products/new" element={<AddProductPage addProduct={addProduct}/>}/>
          <Route path="*" element={<NotFound/>}/>{/* This matches everything else */}
        </Routes>
      </Container>
    </div>
  )
}