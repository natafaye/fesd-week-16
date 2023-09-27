import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";

export default function EditProductPage({ updateProduct, productList }) {
    let { productId } = useParams()
    productId = parseInt(productId) // because URL params are strings, and we want a number

    const product = productList.find(p => p.id === productId)

    return (
        <div>
            <h2>Editing {product.name}</h2>
            <ProductForm onSubmit={updateProduct} initialValues={product} />
        </div>
    )
}