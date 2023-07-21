import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductDetailPage({ productList, addToCart }) {
    let { productId } = useParams()
    productId = parseInt(productId)

    const product = productList.find(p => p.id === productId)

    if(!product) {
        return (<h3 className="mt-3 display-3">404 Not Found</h3>)
    }

    return (
        <ProductCard product={product} showAddToCartButton={true} addToCart={addToCart} />
    )
}