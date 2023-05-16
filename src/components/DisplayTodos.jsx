import React, { useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'

const DisplayTodos = () => {
    const [todos, setTodos] = useState([
        { title: 'first title', descriptions: 'first description' },
        { title: 'Second title', descriptions: 'Second description' },
        { title: 'Third title', descriptions: 'Third description' },
    ])

    const allTodos=todos.map((todo,index)=>(
        <ListGroup.Item key={index}>
            <h4>{todo.title}</h4>
            <p>{todo.descriptions}</p>
        </ListGroup.Item>
    ))
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='shadow-sm mt-3'>
                        <Card.Body>
                            <h3>All Todos are here</h3>
                            <DisplayCount/>
                            <ListGroup className='mt-3'>
                                {allTodos}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default DisplayTodos
