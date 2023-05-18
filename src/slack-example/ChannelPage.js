import React from 'react'
import { useParams } from 'react-router-dom'

export default function ChannelPage({ channelList, postList }) {
    
    // const params = useParams();
    // const channelId = parseInt(params.channelId)
    let { channelId } = useParams();
    channelId = parseInt(channelId); // turning it from a string to a number NaN

    const channel = channelList.find(c => c.id === channelId)
    const posts = postList.filter(p => p.channelId === channelId)

    if(!channel) {
        return <div>No channel found with that id</div>
    }

    return (
        <div>
            <h3>#{channel.name}</h3>
            { posts.map(post => (
                <div className="border p-3 m-3" key={post.id}>
                    { post.text }
                </div>
            ))}
        </div>
    )
}
