import React from 'react'
import MoodView from './MoodView'

export default function AllEntries({ entryList }) {
  return (
    <div>
      { entryList.map(entry => 
        <div key={entry.id}>
          <MoodView mood={entry.mood}/>
        </div>
      )}
    </div>
  )
}
