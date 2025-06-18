import { useState } from "react"
import { ScheduleDay } from "../App"

type Props = {
    setDescription: (newValue: string) => void
    setSchedule: (newValue: ScheduleDay[]) => void
}

export default function MakeScheduleForm({ setDescription, setSchedule }: Props) {
    const [descriptionValue, setDescriptionValue] = useState("hello")
    const [mStartTime, setMStartTime] = useState(9)
    const [mEndTime, setMEndTime] = useState(15)

    const makeItPink = () => {
        setDescriptionValue("Pink")
    }

    // You could write it separate, or put it straight in the onChange
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     // set the state to whatever they changed the input to

    //     // event is from the browser, with info about the event
    //     // event.target is the input DOM node
    //     // event.target.value is the value in the textbox right now

    //     setDescriptionValue(event.target.value)
    // }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() // keep the page from refreshing

        // Set the actual description to the in progress value that was in the form
        setDescription(descriptionValue)

        setSchedule([
            {
                initial: "M",
                startTime: mStartTime,
                endTime: mEndTime
            }
        ])
    }

    return (
        <div className="mt-3">
            <h3>Make Your Schedule</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Description</label>
                <button type="button" onClick={makeItPink}>Make it pink</button>
                <input
                    type="text"
                    value={descriptionValue}
                    onChange={(event) => setDescriptionValue(event.target.value)}
                />
                <h4>Monday</h4>
                <label>Start Time</label>
                <input type="number"
                    value={mStartTime}
                    onChange={(event) => setMStartTime(parseInt(event.target.value))}
                />
                <label>End Time</label>
                <input type="number"
                    value={mEndTime}
                    onChange={(event) => setMEndTime(parseInt(event.target.value))}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}