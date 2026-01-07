import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Conversations from "./Conversations"
import MessageForm from "./MessageForm"
import { v4 as uuid } from "uuid"

export default function App() {
  const [messages, setMessages] = useState([
    {
      text: "I'm doing great",
      channel: "#general",
      priority: 1,
      id: "9",
      edited: false
    },
    {
      text: "How's the class going?",
      channel: "#my-class",
      priority: 5,
      id: "10",
      edited: false
    }
  ])
  const [channels, setChannels] = useState(["#general", "#my-class", "#another-channel"])
  const [currentChannel, setCurrentChannel] = useState("#general")

  const deleteMessage = (idToDelete: string) => {
    // update the messages array in state to NOT have the message with this id
    setMessages(messages.filter(message => message.id !== idToDelete))
  }

  const addMessage = (messageData: { text: string, priority: number }) => {
    const message = {
      ...messageData,
      channel: currentChannel,
      id: uuid(),
      edited: false
    }
    // One janky option
    // messages[messages.length - 1].id + 1

    // Common pattern
    setMessages([...messages, message])
  }

  const updateMessage = (newText: string) => {
    // update it
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h3>Glack</h3>
          <p>Number of messages: {messages.length}</p>
          <div>
            {channels.map(channelName => (
              <button
                key={channelName}
                className={(channelName === currentChannel) ? "btn btn-success" : "btn btn-light"}
                onClick={() => setCurrentChannel(channelName)}
              >
                {channelName}
              </button>
            ))}
          </div>
          <MessageForm onSubmit={addMessage}/>
          <Conversations
            messageList={messages.filter(message => message.channel === currentChannel)}
            onDelete={deleteMessage}
          />
        </div>
      </div>
    </div>
  )
}