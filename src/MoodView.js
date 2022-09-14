import React from 'react'

const MOODS = ["😁", "😃", "😐", "🙁", "😭"]

export default function MoodView({ mood }) {

    // const stars = []
    // for(let i = 0; i < mood; i++) {
    //     stars.push(<img/>)
    // }

    return (
        <div>{ MOODS[mood - 1] }</div>
        // <div> { stars }</div>
    )
}
