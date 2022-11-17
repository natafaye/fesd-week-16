import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewNotePage({ onSubmit }) {
    const [textValue, setTextValue ] = useState("");

    const handleTextChange = (event) => setTextValue(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(textValue);
    }

    return (
        <form>
            <textarea value={textValue} onChange={handleTextChange} /><br />
            <button className="btn btn-success btn-lg" onClick={handleSubmit}>Create</button>
        </form>
    )
}
