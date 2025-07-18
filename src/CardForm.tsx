import { useState } from "react"

type Props = {
    editCard?: { id: number, fruit: string, color: string }
    onSubmit: (idToEdit: number, editedColor: string) => void
}

export default function CardForm({ editCard, onSubmit }: Props) {
    // In Progress form data that will be saved if they click the save button
    const [colorValue, setColorValue] = useState(editCard?.color || "")

    const handleSubmit = () => {
        if (!editCard) {
            return
        }
        // update the card to match the colorValue piece of state
        onSubmit(editCard.id, colorValue)
    }

    return (
        <div className="border p-3 m-3">
            <form onSubmit={handleSubmit}>
                <h3>Edit</h3>
                <label>Color</label>
                <input type="text" onChange={(event) => setColorValue(event.target.value)} value={colorValue} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}