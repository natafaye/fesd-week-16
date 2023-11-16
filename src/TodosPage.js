import { useState } from "react"

export default function TodosPage({ todoList, tagList, addTodo }) {
    const [nameValue, setNameValue] = useState("")
    const [tagsValue, setTagsValue] = useState([])

    const onSubmitButtonClick = (event) => {
        event.preventDefault()

        const newTodoData = {
            name: nameValue,
            tags: tagsValue.map(id => parseInt(id)) // parse string ids into number ids
        }

        addTodo(newTodoData)

        // Clear the form
        setNameValue("")
        setTagsValue([])
    }

    const handleSelectChange = (event) => {
        // This is code we got from the internet hope it works
        let value = Array.from(event.target.selectedOptions, option => option.value)
        setTagsValue(value)
    }

    return (
        <div>
            <h2>Todos</h2>
            <form className="d-flex gap-2 align-items-center">
                <input type="text" className="form-control" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
                <select className="form-select" multiple value={tagsValue} onChange={handleSelectChange}>
                    { tagList.map(tag => (
                        <option value={tag.id} key={tag.id}>{tag.name}</option>
                    ))}
                </select>
                <button className="btn btn-success" onClick={onSubmitButtonClick}>Add</button>
            </form>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        {todo.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}