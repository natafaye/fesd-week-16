import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FoodCard({ food }) {
    return (
        <Col className="mb-2" xs="12" sm="6" md="3" xl={2}>
            <Link to={"/food/" + food.id} className="text-decoration-none text-dark">
                <div className="bg-light border p-3 m-1">
                    <h4>{food.name}</h4>
                    <p className="mb-0">{food.amount} / {food.target}</p>
                </div>
            </Link>
        </Col>
    )
}
