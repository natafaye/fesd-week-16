import React from 'react'
import { useParams } from 'react-router-dom';

export default function NotePage({ noteList }) {
    let { noteId } = useParams();

    const note = noteList.find(n => n.id === noteId)

    return (
        <p>
            { note.text }
        </p>
    )
}
