import { Link } from "react-router-dom";

export default function TagsPage({ tagList }) {
  return (
    <div>
        <h2>Tags</h2>
        { tagList.map(tag => (
            <div key={tag.id}>
                <h6>{tag.name}</h6>
                <Link to={"/tags/" + tag.id}>Todos With Tag</Link>
            </div>
        ))}
    </div>
  )
}