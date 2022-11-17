import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage({ noteList }) {
  return (
    <ul className="list-group">
        { noteList.map(note => (
            <li className="list-group-item" key={note.id}>
                <Link to={"/note/" + note.id}>{note.text}</Link>
            </li>
        ))}
    </ul>
  )
}
