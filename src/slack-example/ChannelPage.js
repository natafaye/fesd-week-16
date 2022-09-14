import React from 'react'
import { useParams } from 'react-router-dom';

export default function ChannelPage() {
    // GET THE CHANNEL ID UP IN THE URL
    //const params = useParams();
    const { channelId } = useParams();

    // we could use that id to array.find() the channel with that id, and display that information
    // we could use it to filter, or many things

    return (
        <div>
            Channel page for the channel with the id: { channelId }
        </div>
    )
}
