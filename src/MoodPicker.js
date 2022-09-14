import React from 'react'

const MOODS = ["😁", "😃", "😐", "🙁", "😭"]


// (index === value - 1) ? "btn btn-primary" : "btn btn-primary-outline"

// if(index === value - 1) "btn btn-primary"
// else "btn btn-primary-outline"

export default function MoodPicker({ value, onChange }) {
  return (
    <div>
        { MOODS.map((mood, index) => (
            <button
                key={mood} 
                type="button" 
                onClick={() => onChange(index + 1)}
                className={(index === value - 1) ? "btn btn-primary" : "btn btn-outline-primary"}>
                { mood }
            </button>
        ))}
    </div>
  )
}