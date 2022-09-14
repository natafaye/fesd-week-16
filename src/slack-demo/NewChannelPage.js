import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewChannelPage() {
    const [nameValue, setNameValue] = useState("new-channel")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        // TODO: Actually create the channel

        navigate("/channels/" + nameValue)
    }

    return (
        <form>
            <label htmlFor="channel-name-input">Name:</label>
            <input type="text" id="channel-name-input" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
            <button className="btn btn-primary" onClick={handleSubmit}>Create New Channel</button>
        </form>
    )
}
