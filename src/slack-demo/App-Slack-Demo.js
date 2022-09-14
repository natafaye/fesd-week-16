import React from 'react'
import { Alert, Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import ChannelPage from './ChannelPage'
import NewChannelPage from './NewChannelPage'
import Sidebar from './Sidebar'
import ThreadsPage from './ThreadsPage'
import TopHeader from './TopHeader'

export default function App() {

  return (
    <>
      <TopHeader/>
      <Sidebar/>
      <Routes>
        <Route path="threads" element={<ThreadsPage/>}/>
        <Route path="channels/:channelId" element={<ChannelPage/>}/>
        <Route path="channels/new" element={<NewChannelPage/>}/>
      </Routes>
    </>
  )
}


// Basically the React Bootstrap Alert component
// function Alert({ variant }) {
//   return (
//     <div className={"alert alert-" + variant}>

//     </div>
//   )
// }

