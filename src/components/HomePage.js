import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FoodCard from './FoodCard'

export default function HomePage({ foodList }) {
    return (
        <>
            <Row className="mt-3">
                <Col>
                    <h3>Fridge</h3>
                </Col>
            </Row>
            <Row>
                { foodList.filter(f => f.location === "Fridge").map(f => <FoodCard key={f.id} food={f}/>) }
            </Row>
            <Row className="mt-3">
                <Col>
                    <h3>Pantry</h3>
                </Col>
            </Row>
            <Row>
                { foodList.filter(f => f.location === "Pantry").map(f => <FoodCard key={f.id} food={f}/>) }
            </Row>
        </>
    )
}
