import { useState } from "react"
import type { Day, Habit } from "./types"
import AddHabitButton from "./AddHabitButton"
import HabitTable from "./HabitTable"

export default function App() {
  const [habitList, setHabitList] = useState<Habit[]>([
    {
      id: 0,
      streakLength: 4,
      name: "Exercise",
      category: "Work",
      targetStreakLength: 30,
      monday: false,
      tuesday: true,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    {
      id: 1,
      streakLength: 15,
      name: "Breakfast",
      category: "Home",
      targetStreakLength: 30,
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: false,
      friday: true,
      saturday: false,
      sunday: false
    }
  ])

  const addHabit = (newHabit: Habit) => {
    setHabitList([...habitList, newHabit])
  }

  const deleteHabit = (habitIdToDelete: number) => {
    setHabitList(habitList.filter(habit => habit.id !== habitIdToDelete))
  }

  const updateDay = (habitId: number, day: Day, updatedValue: boolean) => {
    // Update the matching day property to the value (on a copy)
    const habitIndex = habitList.findIndex(habit => habit.id === habitId)
    const habit = habitList[habitIndex]
    const habitCopy = { ...habit }
    habitCopy[day] = updatedValue
    // Put the updated object into the array (a copy)
    const habitListCopy = [...habitList]
    habitListCopy[habitIndex] = habitCopy
    // Set the state to the updated copy of the array
    setHabitList(habitListCopy)

    // HALFWAY STREAMLINED
    // const habit2 = habitList.find(habit => habit.id === habitId)!
    // const habitCopy2 = { 
    //   ...habit2,
    //   [day]: updatedValue
    // }
    // setHabitList(habitList.map(habit => habit.id !== habitId ? habit : habitCopy2))

    // STREAMLINED BUT CONFUSING
    // setHabitList(habitList.map(habit => habit.id !== habitId ? habit : {
    //   ...habit,
    //   [day]: updatedValue
    // }))
  }

  return (
    <div className="container-fluid">
      <h1>Habit Tracker</h1>
      <AddHabitButton addHabit={addHabit}/>
      <HabitTable habitList={habitList} updateDay={updateDay} deleteHabit={deleteHabit}/>
    </div>
  )
}