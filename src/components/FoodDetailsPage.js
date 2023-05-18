import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function FoodDetailsPage({ foodList }) {

    let { foodId } = useParams()
    foodId = parseInt(foodId)

    const food = foodList.find(f => f.id === foodId)

    if(!food) {
        return (
            <Row>
                <Col>
                    <h2>Couldn't Find Your Food</h2>
                </Col>
            </Row>
        )
    }

    return (
        <Row>
            <Col>
                <h2>{ food.name }</h2>
                <p>{food.amount} / {food.target}</p>
            </Col>
        </Row>
    )
}
