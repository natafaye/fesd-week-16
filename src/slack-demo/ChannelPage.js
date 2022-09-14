import React from 'react'
import { useParams } from 'react-router-dom'

export default function ChannelPage() {
    // NEEDS TO KNOW THE CHANNEL TO SHOW

    //const params = useParams()
    const { channelId } = useParams();

    return (
        <div>
            ChannelPage
            <p>Show channel with id: { channelId }</p>
        </div>
    )
}
