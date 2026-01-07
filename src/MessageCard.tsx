import { useState } from "react"
import { Message } from "./types"

type Props = {
    // What to do if the user wants to delete one
    onDelete: (idToDelete: string) => void
    message: Message
}

export default function MessageCard({ message, onDelete }: Props) {
    const [isEditMode, setIsEditMode] = useState(false)
    const [textValue, setTextValue] = useState(message.text)

    const handleSave = () => {
        setIsEditMode(false)
        //updateMessage(textValue)
    }

    return (
        <p >
            <button
                onClick={() => onDelete(message.id)}
                className="btn btn-danger btn-sm me-3"
            >🗑️</button>
            <span className="badge rounded-pill text-bg-primary me-3">{message.priority}</span>
            { !isEditMode && <span onClick={() => setIsEditMode(true)}>{message.text}</span> }
            { isEditMode && <span>
                    <input type="text" value={textValue} onChange={(event) => setTextValue(event.target.value)}/>
                    <button className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
                </span>
            }
        </p>
    )
}