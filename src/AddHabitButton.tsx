import { ChangeEvent, useState } from "react";
import { Button, Modal } from "react-bootstrap"
import { Habit } from "./types";

let nextId = 3;

type Props = {
  addHabit: (newHabit: Habit) => void
}

export default function AddHabitButton({ addHabit }: Props) {
  // State for the in-progress form data
  // const [nameValue, setNameValue] = useState("")
  // const [categoryValue, setCategoryValue] = useState("Home")
  // const [targetValue, setTargetValue] = useState("20")

  const [values, setValues] = useState({
    name: "",
    category: "Home",
    target: "20"
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setValues({
    ...values,
    [event.target.name]: event.target.value
  })


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    // Reset the form
    // setNameValue("")
    // setCategoryValue("Home")
    // setTargetValue("20")
    setValues({
      name: "",
      category: "Home",
      target: "20"
    })
  }
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    // Get the data from the form, use it to make a new habit, then add that habit
    const newHabit = {
      id: nextId++, // often this comes from a database (we're doing stupid way)
      streakLength: 0,
      name: values.name, //nameValue,
      category: values.category, //categoryValue,
      targetStreakLength: parseInt(values.target), //parseInt(targetValue),
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    }
    addHabit(newHabit)
    // Close the modal and reset the form
    handleClose()
  }

  return (
    <>
      <button className="btn btn-success btn-lg" onClick={handleShow}>Add Habit</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="me-3">
            <div className="row mb-3">
              <label className="form-label col-3">Name</label>
              <input
                type="text"
                className="form-control col"
                value={values.name}
                onChange={handleChange}//(event) => setNameValue(event.target.value)}
              />
            </div>
            <div className="row mb-3">
              <label className="form-label col-3">Category</label>
              <select
                className="form-select col"
                value={values.category}
                onChange={handleChange} //(event) => setCategoryValue(event.target.value)}
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Health">Health</option>
              </select>
            </div>
            <div className="row">
              <label className="form-label col-3">Target Streak</label>
              <input
                type="number"
                className="form-control col"
                value={values.target}
                onChange={handleChange} // (event) => setTargetValue(event.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}