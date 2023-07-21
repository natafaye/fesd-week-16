import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export default function ProductCard({ product, addToCart, showAddToCartButton }) {
    const [theme] = useContext(ThemeContext)

    return (
        <div className={"border shadow p-4 m-4 " + (theme === "dark" ? "bg-dark text-white" : "")}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            { showAddToCartButton && <button className="btn btn-outline-success me-2" onClick={() => addToCart(product.id)}>Add to Cart</button> }
            <Link to={"/products/" + product.id}><button className="btn btn-outline-primary">Details</button></Link>
        </div>
    )
}