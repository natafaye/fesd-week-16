import { useState } from "react"
import type { Player } from "../../types"
import EditingTableRow from "./EditingTableRow"

type Props = {
    player: Player
    editable: boolean
    updatePlayer: (id: number, data: Omit<Player, "id">) => void
}

export default function TableRow({ player, editable, updatePlayer }: Props) {
    const [isEditing, setIsEditing] = useState(false)

    const handleUpdate = (values: Omit<Player, "id">) => {
        updatePlayer(player.id, values)
        setIsEditing(false) // Calling a state setter just asks that the state be changed for the next render
        console.log(isEditing) // true
    }

    return (
        isEditing ?
            <EditingTableRow player={player} onSave={handleUpdate} /> :
            (
                <tr>
                    <td>{player.name}</td>
                    <td>{player.lowScore}</td>
                    <td>
                        {editable &&
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        }
                    </td>
                </tr>
            )
    )
}