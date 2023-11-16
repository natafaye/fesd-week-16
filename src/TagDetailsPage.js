import { useParams } from "react-router-dom"

export default function TagDetailsPage({ todoList, tagList }) {
    // Get what the URL param tagId is set to
    let { tagId } = useParams()
    // Parse it into a number
    tagId = parseInt(tagId)

    const tag = tagList.find(t => t.id === tagId)

    const todosWithTag = todoList.filter(todo => todo.tags.includes(tagId))

    return (
        <div>
            <h2>{ tag.name }</h2>
            <ul>
                { todosWithTag.map(todo => (
                    <li key={todo.id}>
                        {todo.name}
                        <button >Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}