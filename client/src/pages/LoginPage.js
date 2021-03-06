import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginPage = ({ location, history }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(userName, password))
    }

    return (
        <FormContainer>
            <Card style={{display: "flex", justifyContent: "center", width: "500px", marginTop: "50px" }}>
            <Card.Body>
            <h1>Sign In</h1>
            {error && <Message variant='danger'> {error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter username' 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Enter password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' vairant='success'>
                    Sign In
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New user? <Link to={redirect ? `/register?redirect=${redirect}`: `/register`}>Register</Link>
                </Col>

            </Row>
            </Card.Body>
            </Card>
        </FormContainer>
    )
}

export default LoginPage