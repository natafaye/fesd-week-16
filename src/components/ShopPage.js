import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ShopPage({ foodList, updateFood }) {

    const neededFood = foodList.filter(f => f.amount < f.target)

    return (
        <>
            <Row className="mt-3">
                <Col>
                    <h3>Dairy</h3>
                </Col>
            </Row>
            <Row>
                {neededFood.filter(f => f.aisle === "Dairy").map(f => (
                    <div key={f.id}>
                        <input type="checkbox" className="me-2" onChange={() => updateFood({ id: f.id, amount: f.target })}/>
                        <label>{ f.target - f.amount } {f.name}</label>
                    </div>
                ))}
            </Row>
            <Row className="mt-3">
                <Col>
                    <h3>Baking</h3>
                </Col>
            </Row>
            <Row>
                {neededFood.filter(f => f.aisle === "Baking").map(f => (
                    <div key={f.id}>
                        <input type="checkbox" onChange={() => updateFood({ id: f.id, amount: f.target })}/>
                        <label>{ f.target - f.amount } {f.name}</label>
                    </div>
                ))}
            </Row>
        </>
    )
}
