import React, { useState } from 'react'
import ShoppingPage from './components/ShoppingPage'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { TEST_PRODUCTS } from './PRODUCTS'

export default function App() {
    const [productList, setProductList] = useState( TEST_PRODUCTS )
    const [cart, setCart] = useState([{
        id: 0,
        name: "Shoes"
    }])

    const navigate = useNavigate()

    const addToCart = (product) => {
        const newCartItem = { ...product } // because we are crappy
        setCart( cart.concat(newCartItem) )
        navigate("/cart")
    }

    return (
        <div>
            <h1>Shopping App</h1>
            <Link to="/cart">Cart</Link>
            <Link to="/">Shop</Link>
            <Routes>
                <Route path="/" element={<ShoppingPage productList={productList} />}/>
                <Route path="/:productId" element={<ProductPage productList={productList} addToCart={addToCart} />}/>
                <Route path="/cart" element={<CartPage cart={cart} />}/>
            </Routes>
        </div>
    )
}


