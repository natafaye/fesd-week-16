import MessageCard from "./MessageCard"
import { Message } from "./types"

// The typing of props
type Props = {
    // The list of messages to show
    messageList: Message[]
    // What to do if the user wants to delete one
    onDelete: (idToDelete: string) => void
}

export default function Conversations({ messageList, onDelete }: Props) {
    return (
        <div>
            <h6 className="mt-3">Conversations</h6>
            <div id="paragraph-container" className="mt-4">
                {messageList.map(mess =>
                    <MessageCard 
                        key={mess.id}
                        message={mess}
                        onDelete={onDelete}
                    />
                )}
            </div>
        </div>
    )
}