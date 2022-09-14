import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CATEGORIES } from './FAKE_DATA'

export default function TopNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">App Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Nav.Link as={Link} to="/apps">All Apps</Nav.Link>
                        {/* <Nav.Link href="/apps">All Apps</Nav.Link>  <-- DON'T DO THIS */}

                        {
                            CATEGORIES.map(category => (
                                <Nav.Link as={Link} to={ "/apps/category/" + category.id } key={category.id}>{ category.name }</Nav.Link>
                            ))
                        }
                        
                        <Nav.Link as={Link} to="/apps/new">Create New App</Nav.Link>
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
//     )>
// }