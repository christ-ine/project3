import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import PlaceholderImg from '../images/profile-placeholder.png'
import { Button, Card, Form, Modal, Row, Col, ListGroup } from 'react-bootstrap'
import { updateMyAccount, getUserDetails, getUserQuestions, getUserComments } from '../actions/userActions'

const UserEditProfilePage = () => {
    // const [profile, setProfile] = useState([])
    // const [userQuestions, setUserQuestions] = useState([])
    // const [userComments, setUserComments] = useState([])

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userQuestions = useSelector(state => state.userQuestions)
    const { loading:loadingQuestions, error:errorQuestions, user:userPosts } = userQuestions

    const userComments = useSelector(state => state.userComments)
    const { loading:loadingComments, error:errorComments, user:userAnswers } = userComments

    const userUpdateAccount = useSelector(state => state.userUpdateAccount)
    const { loading:loadingUpdate, success:successUpdate, error:errorUpdate } = userUpdateAccount

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.LastName)
    const [userBio, setUserBio] = useState(user.UserBio)
    const [petBio, setPetBio] = useState(user.PetBio)

    useEffect(() => {
        dispatch(getUserDetails(userInfo.user.id))
        setFirstName(user.firstName)
        setLastName(user.LastName)
        setUserBio(user.UserBio)
        setPetBio(user.PetBio)
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserQuestions(userInfo.user.id))
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserComments(userInfo.user.id))
    }, [dispatch])

    const submitHandler = (e) => {
        // e.preventDefault()
        dispatch(updateMyAccount({
            userName: userInfo.user.userName,
            firstName,
            lastName,
            petBio,
            userBio
            
        }))
    }
   

    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Card style={{
                        margin: '40px 0px'
                    }}>

                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                            <Card.Img
                                variant="top"
                                src={PlaceholderImg}
                                style={{
                                    height: '150px',
                                    width: '150px'
                                }} />
                            <div style={{
                                padding: '5px 20px'
                            }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Card.Title><h2>{user.firstName} {user.lastName} @{user.userName}</h2></Card.Title>


                                    <Button variant="danger" size="sm" style={{ height: 'max-content' }} onClick={handleShow}>
                        
                                        Edit Profile
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit your Profile: </Modal.Title>
                                        </Modal.Header>
                                        <Form onSubmit={submitHandler}>
                                            <Modal.Body>
                                                <Form.Row>
                                                    <Col>
                                                        <Form.Label>First Name </Form.Label>
                                                        <Form.Control 
                                                            type='firstName'
                                                            placeholder="Enter first name"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                         />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Last Name </Form.Label>
                                                        <Form.Control 
                                                            type='lastName'
                                                            placeholder="Enter last name"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                        />
                                                    </Col>
                                                </Form.Row>

                                                <Form.Group controlId="AboutMeInput">
                                                    <Form.Label>About Me: </Form.Label>
                                                    <Form.Control 
                                                        as="textarea" 
                                                        rows={3}
                                                        type='userBio'
                                                        placeholder="Enter your bio"
                                                        value={userBio}
                                                        onChange={(e) => setUserBio(e.target.value)}
                                                        />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>My Pet: </Form.Label>
                                                    <Form.Control 
                                                        as="textarea" 
                                                        rows={3}
                                                        type='petBio'
                                                        placeholder="Enter your pet's bio"
                                                        value={petBio}
                                                        onChange={(e) => setPetBio(e.target.value)}
                                                    />
                                                </Form.Group>
                                                {/* <div className="mb-3">
                                                    <Form.File id="formcheck-api-regular">
                                                        <Form.File.Label>Upload a Picture of yourself</Form.File.Label>
                                                        <Form.File.Input />
                                                    </Form.File>
                                                </div> */}




                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal>


                                </div>

                                <Card.Text>
                                    <p>
                                        <strong>About Me: </strong>
                                        {user.userBio}
                                    </p>

                                    <p>
                                        <strong>My Pet: </strong>
                                        {user.petBio}
                                    </p>

                                </Card.Text>
                            </div>

                        </Card.Body>

                    </Card>
                </Col>

            </Row>

            <Row>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}><h3>Questions</h3></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    {userPosts.map(userPost => (
                                    <ListGroup.Item>
                                        <Link to={`/question/${userPost.id}`} style={{color: 'black'}}>
                                        {userPost.question}
                                        </Link>
                                    </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}><h3>Community Contributions</h3></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                {userAnswers.map(userAnswer => (
                                    <ListGroup.Item>
                                        <Link to={`/question/${userAnswer.QuestionId}`} style={{color: 'black'}}>
                                        {userAnswer.comment}
                                        </Link>
                                    </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default UserEditProfilePage