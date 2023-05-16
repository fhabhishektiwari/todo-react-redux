import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import {addTodo} from '../redux/actions/todo'
import { connect } from 'react-redux'
const AddTodo = ({addTodo}) => {
    const [todo,setTodo]=useState({
        title:'',
        descriptions:'',
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        // add todo in store
        addTodo(todo);
        console.log(todo)
        setTodo({
            title:'',
            descriptions:''
        })
    }
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h3>Add Todo here!!</h3>
                            <DisplayCount/>
                            {/* forms */}
                            <Form onSubmit={handleSubmit} className='mt-3'>
                                {/* title */}
                                <Form.Group>
                                    <Form.Label>Todo Title</Form.Label>
                                    <Form.Control 
                                        type='text' 
                                        placeholder='Enter here'
                                        value={todo.title}
                                        onChange={event=>setTodo({...todo,title:event.target.value})}
                                    ></Form.Control>
                                </Form.Group>
                                {/* Descriptions */}
                                <Form.Group className='mt-3'>
                                    <Form.Label>Todo Description</Form.Label>
                                    <Form.Control 
                                        as={'textarea'} 
                                        type='text' 
                                        placeholder='Enter here'
                                        value={todo.descriptions}
                                        onChange={event => setTodo({ ...todo, descriptions: event.target.value })}
                                    ></Form.Control>
                                </Form.Group>

                                <Container className='text-center mt-3'>
                                    <Button variant='primary' type='submit'>Add Todo</Button>
                                </Container>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapDispatchToProps,mapDispatchToProps) (AddTodo)
