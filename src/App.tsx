import { useState } from "react"
import BigCard from "./BigCard"
import SmallCard from "./SmallCard"
import { STARTER_FLASHCARDS } from "./myData"
import CardForm from "./CardForm"

export default function App() {
  const [flashcards, setFlashcards] = useState(STARTER_FLASHCARDS)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showOnlyRed, setShowOnlyRed] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editCardId, setEditCardId] = useState<null | number>(null)

  const addCard = () => {
    const newCard = {
      id: 3,
      fruit: "strawberry",
      color: "red"
    }
    setFlashcards([...flashcards, newCard])
  }

  const removeCard = (idToRemove: number) => {
    setFlashcards(flashcards.filter(card => card.id !== idToRemove))
  }

  const startEdit = (idToEdit: number) => {
    // save the id as the card we're editing
    setEditCardId(idToEdit)
    // show the form
    setShowEdit(true)
  }

  const saveEdit = (idToEdit: number, editedColor: string) => {
    setFlashcards(flashcards.map(card => (
      card.id !== idToEdit ? card : {
        ...card,
        color: editedColor
      }
    )))
    setShowEdit(false)
    setEditCardId(null)
  }

  const goToNextCard = () => {
    let nextIndex = currentCardIndex + 1
    if (nextIndex >= flashcards.length) {
      nextIndex = 0
    }
    setCurrentCardIndex(nextIndex)
  }

  return (
    <div className="container">
      <h1 className="display-1 mt-3 mb-4">Flashcards</h1>
      <button onClick={addCard}>Add Strawberry</button>
      { showEdit && <CardForm editCard={flashcards.find(card => card.id === editCardId)} onSubmit={saveEdit}/> }
      <BigCard
        card={flashcards[currentCardIndex]}
        incrementCard={goToNextCard}
        removeCard={removeCard}
      />
      <div className="mt-5">
        <input
          type="checkbox"
          id="red-checkbox"
          className="form-checkbox"
          onChange={(event) => setShowOnlyRed(event.target.checked)}
          checked={showOnlyRed}
        />
        <label htmlFor="red-checkbox" className="form-label ms-1">Only Red Please</label>
      </div>
      <div className="d-flex gap-3 mt-4">
        {flashcards.filter(card => !showOnlyRed || card.color === "red").map(card => (
          <SmallCard card={card} onEdit={startEdit} key={card.id} />
        ))}
      </div>
    </div>
  )
}