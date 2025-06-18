import { Container } from "react-bootstrap";
import CurrentSchedule from "./components/CurrentSchedule";
import MakeScheduleForm from "./components/MakeScheduleForm";
import { useState } from "react";

export type ScheduleDay = {
  initial: string
  startTime: number
  endTime: number
}

export default function App() {
  const [description, setDescription] = useState("Make a 30 minute mentor meeting")
  const [schedule, setSchedule] = useState([
    {
      initial: "M",
      startTime: 9,
      endTime: 15
    },
    {
      initial: "T",
      startTime: 9,
      endTime: 15
    },
    {
      initial: "W",
      startTime: 9,
      endTime: 15
    },
    {
      initial: "Th",
      startTime: 9,
      endTime: 15
    },
    {
      initial: "F",
      startTime: 9,
      endTime: 15
    },
    {
      initial: "Sa",
      startTime: 9,
      endTime: 15
    },
    {
      initial: "Su",
      startTime: 9,
      endTime: 15
    },
  ])

  return (
    <Container className="mt-3">
      <CurrentSchedule description={description} schedule={schedule} />
      <MakeScheduleForm setDescription={setDescription} setSchedule={setSchedule}/>
    </Container>
  )
}