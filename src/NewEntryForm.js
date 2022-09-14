import React, { useState } from 'react'
import MoodPicker from './MoodPicker'

export default function NewEntryForm({ onSubmit }) {
    const [moodValue, setMoodValue] = useState(1);
    const [descriptionValue, setDescriptionValue] = useState("")

    const handleDescriptionChange = (event) => setDescriptionValue(event.target.value);

    const handleMoodChange = (newMood) => setMoodValue(newMood)

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            mood: moodValue,
            description: descriptionValue
        })
    }

    return (
        <form>
            <label>Mood</label>
            <MoodPicker value={moodValue} onChange={handleMoodChange} />
            <label>Description</label>
            <textarea value={descriptionValue} onChange={handleDescriptionChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
