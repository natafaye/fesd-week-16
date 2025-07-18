type Props = {
    card: { id: number, fruit: string, color: string }
    onEdit: (idToEdit: number) => void
}

export default function SmallCard({ card, onEdit }: Props) {
    return (
        <div className="card p-4 shadow">
            { card.fruit } { card.color }
            <button className="btn btn-primary" onClick={() => onEdit(card.id)}>Edit</button>
        </div>
    )
}