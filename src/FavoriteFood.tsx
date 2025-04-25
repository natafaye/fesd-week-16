import { ChangeEvent, useState } from "react"

export default function FavoriteFood() {
  const [foodValue, setFoodValue] = useState("")
  // You can use foodValue where you would grab the textbox and get its value

  // Longhand version
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // update the piece of state to match the value of input
  //   // We CANNOT get by id
  //   const actualInput = event.target
  //   setFoodValue(actualInput.value) // set the state to match the value of the input
  // }

  return (
    <div>
      What's your favorite food?
      <input type="text" value={foodValue} onChange={(event) => setFoodValue(event.target.value)}/>
      <p>Your favorite food is: {foodValue}</p>
    </div>
  )
}