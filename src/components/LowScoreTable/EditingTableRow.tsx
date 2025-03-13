import { ChangeEvent, useState } from "react"
import type { Player } from "../../types"

type Props = {
    player: Player
    onSave: (values: Omit<Player, "id">) => void
}

export default function EditingTableRow({ player, onSave }: Props) {
    // FYI: When you make an edit form with the initial values of state being a prop
    // that state will not update if the prop updates
    // But that only matters if there's a way for the player data to change outside of this editing
    // Or if this component is always in the app, not taken out and put back in fresh
    const [formValues, setFormValues] = useState({
        name: player.name,
        lowScore: player.lowScore
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setFormValues({
        ...formValues,
        [event.target.name]: event.target.value
    })

    return (
        <tr>
            <td>
                <input type="text"
                    onChange={handleChange}
                    name="name"
                    value={formValues.name}
                />
            </td>
            <td>
                <input type="number"
                    onChange={handleChange}
                    name="lowScore"
                    value={formValues.lowScore}
                />
            </td>
            <td>
                <button
                    className="btn btn-success"
                    onClick={() => onSave(formValues)}
                >
                    Save
                </button>
            </td>
        </tr>
    )
}