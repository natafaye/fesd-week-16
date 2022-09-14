import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="bg-light">
        <Nav>
            <Nav.Item>
                <Nav.Link as={NavLink} to="entries/new">New Entry</Nav.Link>
                <Nav.Link as={NavLink} to="/">All Entries</Nav.Link>
                <Nav.Link as={NavLink} to="entries/happy">Happy</Nav.Link>
                <Nav.Link as={NavLink} to="entries/sad">Sad</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  )
}
