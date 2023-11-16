import ProductForm from "./ProductForm";

export default function AddProductPage({ addProduct }) {
  return (
    <div>
        <h2>New Product</h2>
        <ProductForm onSubmit={addProduct}/>
    </div>
  )
}