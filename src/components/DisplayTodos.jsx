import React, { useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions/todo'

const DisplayTodos = ({todos,deleteTodo}) => {
    
    const allTodos=todos.map((todo,index)=>(
        <ListGroup.Item key={index}>
            <h4>{todo.title}</h4>
            <p>{todo.descriptions}</p>
            <Button variant='danger' onClick={(event)=>deleteTodo(todo.id)}>Delete</Button>
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

const mapStateToProps=(state)=>{
    // console.log(state.todos)
    return {todos:state.todos}
}

const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})


export default connect(mapStateToProps,mapDispatchToProps) (DisplayTodos)
