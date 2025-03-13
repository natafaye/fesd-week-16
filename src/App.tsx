import { useState } from "react"
import Board from "./components/Board/Board"
import Footer from "./components/Footer"
import LowScoreTable from "./components/LowScoreTable/LowScoreTable"
import Message from "./components/Message"
import NameEntry from "./components/NameEntry"
import { TEST_DATA } from "./testData"
import { Form } from "react-bootstrap"
import { Player } from "./types"

export default function App() {
  const [messageText, setMessageText] = useState("")
  const [playerList, setPlayerList] = useState(TEST_DATA)
  const [currentPlayerId, setCurrentPlayerId] = useState<null | number>(null)
  const [inCheatMode, setInCheatMode] = useState(false)

  const handleStart = (name: string) => {
    let nextPlayer = playerList.find(playerToCheck => playerToCheck.name === name)

    if (nextPlayer === undefined) {
      nextPlayer = { id: 5, name: name, lowScore: 1000 } // TODO: fix that id at some point
      setPlayerList([...playerList, nextPlayer])
    }
    setCurrentPlayerId(nextPlayer.id)
    setMessageText("Welcome " + nextPlayer.name + " Your lowest score so far is " + nextPlayer.lowScore)
  }

  const updatePlayer = (idToUpdate: number, updatedData: Omit<Player, "id">) => {
    setPlayerList(playerList.map(player => (
      player.id !== idToUpdate ? player : {
        ...player,
        ...updatedData
        // name: updatedData.name,
        // lowScore: updatedData.lowScore
      }
    )))

    // const tempPlayerList = [...playerList]
    // const indexOfPlayer = playerList.findIndex(p => p.id === idToUpdate)
    // const player = playerList[indexOfPlayer]
    // const tempPlayer = { ...player}
    // tempPlayer.name = "Hi"
    // tempPlayerList[indexOfPlayer] = tempPlayer
    // setPlayerList(tempPlayerList)

  }

  return (
    <div className="container">
      <NameEntry onNameEntered={handleStart} />
      <Message messageText={messageText} textColor="blue" />
      <Board />
      <Form.Check
        type="switch"
        label="Cheat Mode"
        onChange={(event) => setInCheatMode(event.target.checked)}
        checked={inCheatMode}
        className="my-3"
      />
      <LowScoreTable playerList={playerList} editable={inCheatMode} updatePlayer={updatePlayer} />
      <Footer />
    </div>
  )
}


// Talking after class notes

// listeners change the state
// mark as important => change the state of that task to have important as true

// render based on the state
// show a filtered list of important tasks to the side
// show a sorted list of all tasks with important ones at the top
// filter to get all the important tasks
// filter to get all the unimportant tasks
// concatentate the two together with the important tasks first
// render based on that concatenated array

// const [array, setArray] = useState([])
// const sortedArray = fdsfds.concat(fdsfsd)
// sortedArray.map()


// const completedTasks = tasks.filter(t => t.completed)
// return ( completedTasks.length !== 0 && <div>{ completedTasks.map() }</div> )