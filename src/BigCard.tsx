import { useState } from "react"

type Props = {
    card: { id: number, fruit: string, color: string }
    incrementCard: () => void
    removeCard: (idToRemove: number) => void
}

export default function BigCard({ card, incrementCard, removeCard }: Props) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [score, setScore] = useState(0)

    const flip = () => {
        setIsFlipped(!isFlipped)
    }

    const addToScore = () => {
        setScore(score + 1)
    }

    const subtractFromScore = () => {
        setScore(score - 1)
    }

    return (
        <>
            <p>Score: {score}</p>
            <div className="card p-4 mb-3 shadow">
                { isFlipped ? card.color : card.fruit }
            </div>
            <button className="btn btn-primary btn-lg" onClick={flip}>Flip</button>
            <button className="btn btn-success btn-lg" onClick={addToScore}>Got it Right</button>
            <button className="btn btn-danger btn-lg" onClick={subtractFromScore}>Got it Wrong</button>
            <button className="btn btn-primary btn-lg" onClick={incrementCard}>Next Card</button>
            <button className="btn btn-warning btn-lg" onClick={() => removeCard(card.id)}>Retire Card</button>
        </>
    )
}