import React, { useState } from 'react'
import { CATEGORIES } from './FAKE_DATA'

export default function NewAppForm({ onSubmit }) {
    const [categoryValue, setCategoryValue] = useState(0)
    const [nameValue, setNameValue] = useState("New App")

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit({
            categoryId: parseInt(categoryValue),
            name: nameValue
        })
    }

    return (
        <form>
            <label>Name</label>
            <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
            <label>Category</label>
            <select value={categoryValue} onChange={(event) => setCategoryValue(event.target.value)}>
                { CATEGORIES.map(category => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                ))}
            </select>
            <button className="btn btn-primary" onClick={handleSubmit}>Create App</button>
        </form>
    )
}
