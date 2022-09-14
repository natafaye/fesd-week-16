import React, { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import AllEntries from './AllEntries'
import EntriesInCategory from './EntriesInCategory'
import NewEntryForm from './NewEntryForm'
import Sidebar from './Sidebar'

export default function App() {
    const [entryList, setEntryList] = useState([
        {
            id: 0,
            description: "The greatest day!",
            mood: 2
        },
        {
            id: 1,
            description: "The greatest day!",
            mood: 4
        }
    ])

    const navigate = useNavigate();

    const addEntry = (newEntry) => {
        newEntry = { ...newEntry, id: entryList[entryList.length - 1].id + 1 } // little hack
        setEntryList([...entryList, newEntry])
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Sidebar />
                </div>
                <div className="col">
                    <Routes>
                        <Route path="entries/new" element={<NewEntryForm onSubmit={addEntry}/>} />
                        <Route path="/" element={<AllEntries entryList={entryList}/>} />
                        <Route path="entries/:category" element={<EntriesInCategory entryList={entryList} />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
