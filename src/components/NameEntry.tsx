import { useState } from "react"

type Props = {
    onNameEntered: (name: string) => void
}

export default function NameEntry({ onNameEntered }: Props) {
    // The in-progress form state
    // Only the form's business
    const [nameValue, setNameValue] = useState("")

    const onStartClicked = () => {
        // We have made sure that nameValue will always match what's in the textbox
        onNameEntered(nameValue)

        // Clear the input
        setNameValue("")
    }

    return (
        <div className="mb-3">
            <label>Name</label>
            <div>
                <input
                    type="text"
                    onChange={(event) => setNameValue(event.target.value)}
                    value={nameValue}
                    className="form-control"
                />
                <button onClick={onStartClicked} className="btn btn-success mt-2">Start</button>
            </div>
        </div>
    )
}