import { ChangeEvent, MouseEvent, useState } from "react"

type Props = {
    onSubmit: (updatedData: string) => void
    word: string
}

export default function WordForm({ onSubmit, word }: Props) {
    // in progress form data
    const [wordValue, setWordValue] = useState(word)
    const [error, setError] = useState("")

    const handleWordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newWordValue = event.target.value
        setWordValue(newWordValue)
        // using an old value of wordValue
        if(newWordValue.includes("'")) {
            setError("You can't use a quotation mark!")
        } else {
            setError("")
        }
    }

    const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        // get word changed to wordValue
        onSubmit(wordValue)
    }

    return (
        <form>
            <input type="text"
                onChange={handleWordChange}
                value={wordValue}
            />
            { error && <p className="text-danger">{error}</p>}
            <button onClick={handleFormSubmit}>Save Change</button>
        </form>
    )
}