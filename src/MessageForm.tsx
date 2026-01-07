import { MouseEvent, useState } from "react"

const selectOptions = [1, 2, 3, 4, 5, 6]

type Props = {
    // What to do if the user submits the form
    onSubmit: (formData: { text: string, priority: number }) => void
}

export default function MessageForm({ onSubmit }: Props) {
    const [textValue, setTextValue] = useState("")
    const [priorityValue, setPriorityValue] = useState("1")

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        // Get the data from the form and make it into a message to submit
        const formData = {
            text: textValue,
            priority: parseInt(priorityValue)
        }

        onSubmit(formData);

        // clear the form
        setTextValue("")
        setPriorityValue("1")
    }

    return (
        <form className="d-flex gap-2 align-items-center mt-3">
            <input
                type="text"
                id="textbox-thing"
                className="form-control"
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
            />
            <select
                className="form-select"
                style={{ width: "100px" }}
                value={priorityValue}
                onChange={(event) => setPriorityValue(event.target.value)}
            >
                {selectOptions.map(value => <option key={value}>{value}</option>)}
            </select>
            <button className="btn btn-primary" id="send-button" onClick={handleSubmit}>Send</button>
        </form>
    )
}

// Uses for curly brackets
// objects
// blocks of code
// put javascript in our html in react

// const myUser = { id: 3 }
// console.log({ id: 3 })
// const someArray = []
// someArray.push({ id: 3 })