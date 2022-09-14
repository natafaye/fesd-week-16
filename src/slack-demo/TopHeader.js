import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function TopHeader() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Slack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/channels/CD438GDB">#general</Nav.Link>
                        <Nav.Link as={NavLink} to="/threads">Threads</Nav.Link>
                        <Nav.Link as={NavLink} to="/channels/new">New Channel</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


// function Nav.Link() {
//     return (
//         <a className="nav-link">

//         </a>
//     )
// }