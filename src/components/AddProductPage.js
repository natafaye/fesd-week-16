import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AddProductPage({ addProduct }) {
  const navigate = useNavigate()

  const onSubmit = (values) => {
    addProduct(values)
    navigate("/")
  }

  return (
    <Formik initialValues={{ name: "", price: 10 }} onSubmit={onSubmit}>
      <Form className="mt-4">
        <label className="form-label">Name</label>
        <Field type="text" name="name" className="form-control"/>
        <label className="form-label">Price</label>
        <Field type="number" name="price" className="form-control"/>
        <Button variant="outline-success" className="mt-2" type="submit">Add</Button>
      </Form>
    </Formik>
  )
}