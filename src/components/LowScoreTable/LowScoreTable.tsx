import type { Player } from "../../types"
import TableRow from "./TableRow"

type Props = {
  playerList: Player[]
  editable?: boolean
  updatePlayer: (id: number, data: Omit<Player, "id">) => void
}

export default function LowScoreTable({ playerList, updatePlayer, editable = false }: Props) {
  return (
    <div>
      <h4>Low Scores</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Low Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {playerList.map(player => (
            <TableRow key={player.id} player={player} editable={editable} updatePlayer={updatePlayer}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}