import ProductCard from "./ProductCard";

export default function CartPage({ cartList, productList }) {
  return (
    <div>
        { cartList.map(cartItem => 
            <ProductCard key={cartItem.id} showAddToCartButton={false} product={productList.find(p => p.id === cartItem.productId)} />
        )}
    </div>
  )
}