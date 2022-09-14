import React from 'react'
import { Alert, Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import ChannelPage from './ChannelPage'
import Sidebar from './Sidebar'
import ThreadsPage from './ThreadsPage'
import TopHeader from './TopHeader'

export default function App() {
    return (
        <>
            <TopHeader/>
            <Sidebar/>
            <Routes>
                <Route path="/threads" element={<ThreadsPage/>}/>
                <Route path="/channels/:channelId" element={<ChannelPage/>}/>
            </Routes>
        </>
    )
}









// function Alert({ variant }) {
//     return (
//         <div className={"alert alert-" + variant}>

//         </div>
//     )
// }


            // <Navbar bg="dark" variant="dark" expand="lg">
            //     <Container>
            //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //         <Navbar.Collapse id="responsive-navbar-nav">
            //             <Nav className="me-auto">
            //                 <Nav.Link href="#home">Home</Nav.Link>
            //                 <Nav.Link href="#features">Features</Nav.Link>
            //                 <Nav.Link href="#pricing">Pricing</Nav.Link>
            //             </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>
            // <div className="card">
            //     <div className="card-body">
            //         <div className="card-title">Something</div>
            //     </div>
            // </div>
            // <div className="alert alert-warning mt-3">
            //     WARNING
            // </div>
            // <Alert variant="warning" className="mt-3">
            //     WARNING
            // </Alert>
