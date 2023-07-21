import ProductCard from "./ProductCard";

export default function HomePage({ productList, addToCart }) {
  return (
    <div>
        { productList.map(product => <ProductCard key={product.id} product={product} showAddToCartButton={true} addToCart={addToCart}/>)}
    </div>
  )
}