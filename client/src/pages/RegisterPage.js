import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterPage = ({ location, history }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')



    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, success, error } = userRegister

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(userName, email, password, lastName, firstName))
    }

    return (
        <FormContainer>
            <Card style={{display: "flex", justifyContent: "center", width: "500px", marginTop: "50px" }}>
                <Card.Body>
                    <h1>Register</h1>
                    {error && <Message variant='danger'> {error}</Message>}
                    {loading && <Loader />}
                    
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='firstName'>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter first name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='lastName'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter last name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='userName'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter username'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required>
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' vairant='success' style={{marginBottom: "10px"}}>
                            Register
                        </Button>
                        
                        {success && <Message variant='success' > Sucessfully registered new account! Please <Link to={`/login`} style={{color: 'white', fontWeight:"bold"}}>Login here</Link> </Message>}
                    </Form>
                    <Row className='py-3'>
                        <Col>
                            Already a user? <Link to={`/login`}>Login here</Link>
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        </FormContainer>
    )
}

export default RegisterPage