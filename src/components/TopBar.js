import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function TopBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Pantries R Us</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
