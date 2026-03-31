import { Day, Habit } from "./types"

const DAYS: Day[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

type Props = {
    habitList: Habit[]
    updateDay: (habitId: number, day: Day, updatedValue: boolean) => void
    deleteHabit: (habitIdToDelete: number) => void
}

export default function HabitTable({ habitList, updateDay, deleteHabit }: Props) {
    return (
        <table className="table table-striped fs-5">
            <thead>
                <tr>
                    <th>Streak</th>
                    <th>Category</th>
                    <th>Habit</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                    <th>Su</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {habitList.map(habit => (
                    <tr key={habit.id}>
                        <td>{habit.streakLength} / {habit.targetStreakLength}</td>
                        <td>{habit.category}</td>
                        <td>{habit.name}</td>
                        {DAYS.map(day => (
                            <td key={day}>
                                <input
                                    type="checkbox"
                                    checked={habit[day]}
                                    onChange={(event) => updateDay(habit.id, day, event.target.checked)}
                                />
                            </td>
                        ))}
                        <td>
                            <button
                                className="btn btn-warning"
                                onClick={() => deleteHabit(habit.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}