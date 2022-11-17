import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ channelList }) {
  return (
    <div className="bg-light p-3">
        <ul className="list-group">
            { channelList.map(channel => (
                <li className="list-group-item" key={channel.id}>
                    <Link to={"/channel/" + channel.id}>#{ channel.name }</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
