import { useContext } from "react"
import { ThemeContext } from "./components/ThemeContext"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const [ , setTheme] = useContext(ThemeContext)

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Shopping R Us</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
                    <Nav.Link as={NavLink} to="/products/create/new">Add Product</Nav.Link>
                </Nav>
                <button className="btn btn-primary-outline" onClick={() => setTheme("dark")}>Dark Mode</button>
                <button className="btn btn-primary-outline" onClick={() => setTheme("light")}>Light Mode</button>
            </Container>
        </Navbar>
    )
}