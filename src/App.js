import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AllAppsPage from './AllAppsPage'
import AppCategoryPage from './AppCategoryPage'
import AppPage from './AppPage'
import { FAKE_APPS } from './FAKE_DATA'
import HomePage from './HomePage'
import NewAppForm from './NewAppForm'
import TopNavbar from './TopNavbar'

export default function App() {
    const [appList, setAppList] = useState(FAKE_APPS);
    const navigate = useNavigate()

    const createApp = (newAppData) => {
        const newApp = { ...newAppData, id: appList[appList.length - 1].id + 1 } // lil hack to get a unique id
        setAppList([...appList, newApp]);

        // Navigate to the page for the app we just made
        navigate("/apps/" + newApp.id)
    }

    return (
        <>
            <TopNavbar />
            <Container>
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/apps" element={<AllAppsPage appList={appList} />} />
                            <Route path="/apps/:appId" element={<AppPage appList={appList} />} />
                            <Route path="/apps/category/:categoryId" element={<AppCategoryPage appList={appList} />} />
                            <Route path='/apps/new' element={<NewAppForm onSubmit={createApp}/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
