import { ScheduleDay } from "../App"

type Props = {
    description: string
    schedule: ScheduleDay[]
}

export default function CurrentSchedule({ description, schedule }: Props) {
    return (
        <div>
            <h2>Current Schedule</h2>
            <p>{description}</p>
            {schedule.map(day => (
                <div key={day.initial}>
                    {day.initial} {day.startTime} - {day.endTime}
                </div>
            ))}
        </div>
    )
}