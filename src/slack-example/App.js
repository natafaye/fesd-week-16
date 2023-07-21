import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import React, { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import ThreadsPage from './ThreadsPage'
import HomePage from './HomePage'
import Sidebar from './Sidebar'
import ChannelPage from './ChannelPage'

const TEST_CHANNELS = [
  {
    id: 0,
    name: "random"
  },
  {
    id: 1,
    name: "general"
  },
  {
    id: 2,
    name: "react"
  }
]

const TEST_POSTS = [
  {
    id: 0,
    channelId: 0,
    text: "Hey there!"
  },
  {
    id: 1,
    channelId: 0,
    text: "I'm doing good!"
  },
  {
    id: 2,
    channelId: 2,
    text: "I love React"
  },
]

// path = "localhost:3000"

export default function App() {
  const [channelList, setChannelList] = useState(TEST_CHANNELS)
  const [postList, setPostList] = useState(TEST_POSTS)

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Slack</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/threads">Threads</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <div className="col-4">
            <Sidebar channelList={channelList}/>
          </div>
          <Col>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/threads" element={<ThreadsPage />} />
              <Route path="/channel/:channelId" element={<ChannelPage channelList={channelList} postList={postList}/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

