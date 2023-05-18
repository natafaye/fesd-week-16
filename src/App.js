import React, { useState } from 'react'
import { TEST_FOOD } from './TEST_FOOD'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage'
import FoodDetailsPage from './components/FoodDetailsPage'
import TopBar from './components/TopBar'
import { Container } from 'react-bootstrap'

let nextId = 10 // hack to get unique ids

export default function App() {
  const [foodList, setFoodList] = useState(TEST_FOOD)

  const addFood = (newFoodData) => {
    const newFood = {
      ...newFoodData,
      id: nextId++
    }
    setFoodList(foodList.concat(newFood))
  }

  const updateFood = (updatedFoodData) => {
    setFoodList(foodList.map(food => 
      food.id === updatedFoodData.id ? 
      { ...food, ...updatedFoodData }
      : food
    ))
  }

  const deleteFood = (idToDelete) => {
    setFoodList(foodList.filter(food => food.id === idToDelete))
  }

  return (
    <div>
      <TopBar/>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage foodList={foodList}/>}/>
          <Route path="/shop" element={<ShopPage foodList={foodList} updateFood={updateFood} />}/>
          <Route path="/food/:foodId" element={<FoodDetailsPage foodList={foodList} />}/>
        </Routes>
      </Container>
    </div>
  )
}
