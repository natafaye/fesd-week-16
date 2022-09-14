import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
        <h2>Sidebar</h2>
        <Link to="/channels/DFVDSERE">#general</Link>
        <Link to="/channels/3fdsf3fds">#random</Link>
    </div>
  )
}
