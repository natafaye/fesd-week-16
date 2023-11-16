import { useState } from "react"

export default function ProductForm({ onSubmit, initialValues }) {
    const [nameValue, setNameValue] = useState(initialValues ? initialValues.name : "")

    const handleSubmitClick = () => {
        const formData = {
            name: nameValue
        }
        onSubmit(formData)
    }

    return (
        <form>
            <input type="text" value={nameValue} />
            <button className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
        </form>
    )
}