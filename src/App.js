import { Badge, Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import TodosPage from "./TodosPage";
import TagsPage from "./TagsPage";
import { useEffect, useState } from "react";
import TagDetailsPage from "./TagDetailsPage";

export default function App() {
  const [todoList, setTodos] = useState([])
  const [tagList, setTags] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3005/todos")
      const allTodos = await response.json()
      setTodos(allTodos)
    }
    const fetchTags = async () => {
      const response = await fetch("http://localhost:3005/tags")
      const allTags = await response.json()
      setTags(allTags)
    }
    fetchTodos()
    fetchTags()
  }, []) // Don't forget this like a silly goose

  const addTodo = async (newTodoData) => {
    // Add to the backend
    const response = await fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodoData)
    })
    const createdTodo = await response.json()

    // Add to the frontend
    setTodos([...todoList, createdTodo])
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Todos R Us</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/tags">Tags</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<TodosPage todoList={todoList} tagList={tagList} addTodo={addTodo}/>}/>
          <Route path="/tags" element={<TagsPage tagList={tagList}/>}/>
          <Route path="/tags/:tagId" element={<TagDetailsPage todoList={todoList} tagList={tagList} />}/>
          <Route path="*" element={<h1>NOT FOUND</h1>}/> {/* Matches everything else */}
        </Routes>
      </Container>
    </div>
  )
}