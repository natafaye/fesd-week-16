import React from 'react'
import { useParams } from 'react-router-dom'
import MoodView from './MoodView';

export default function EntriesInCategory({ entryList }) {

    const { category } = useParams()

    let filteredEntries = null;
    if (category === "happy") {
        filteredEntries = entryList.filter(entry => entry.mood < 3)
    }
    else {
        filteredEntries = entryList.filter(entry => entry.mood > 3)
    }

    // You could find instead of filter to show one specific entry

    return (
        <div>
            {filteredEntries.map(entry =>
                <div key={entry.id}>
                    <MoodView mood={entry.mood} />
                </div>
            )}
        </div>
    )
}
