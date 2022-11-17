import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './HomePage'
import NewNotePage from './NewNotePage'
import NotePage from './NotePage'
import {v4 as uuid } from 'uuid'

export default function App() {
    const [noteList, setNoteList] = useState([])

    const navigate = useNavigate();

    const addNote = (newNoteText) => {
        const newNote = {
            id: uuid(), // UUID library makes a unique id for me
            text: newNoteText
        }

        setNoteList(noteList.concat(newNote));
        
        navigate("/note/" + newNote.id)
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Note App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/note/new">New Note</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="p-3">
                <Routes>
                    <Route path="note/:noteId" element={<NotePage noteList={noteList} />} />
                    <Route path="note/new" element={<NewNotePage onSubmit={addNote} />} />
                    <Route path="/" element={<HomePage noteList={noteList}/>} />
                </Routes>
            </div>
        </div>
    )
}
