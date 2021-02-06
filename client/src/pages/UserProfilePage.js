import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import PlaceholderImg from '../images/profile-placeholder.png'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { getUserDetails, getUserQuestions, getUserComments } from '../actions/userActions'

const UserProfilePage = ({ match }) => {
    // const [profile, setProfile] = useState([])
    // const [userQuestions, setUserQuestions] = useState([])
    // const [userComments, setUserComments] = useState([])

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userQuestions = useSelector(state => state.userQuestions)
    const { loading:loadingQuestions, error:errorQuestions, user:userPosts } = userQuestions

    const userComments = useSelector(state => state.userComments)
    const { loading:loadingComments, error:errorComments, user:userAnswers } = userComments

    console.log(userAnswers)

    useEffect(() => {
        dispatch(getUserDetails(match.params.id))
    }, [match])

    useEffect(() => {
        dispatch(getUserQuestions(match.params.id))
    }, [match])

    useEffect(() => {
        dispatch(getUserComments(match.params.id))
    }, [match])
   

    return (
        <div>
            <Container>
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


                                    {/* <Button variant="danger" size="sm" style={{ height: 'max-content' }} onClick={handleShow}>
                        
                                        Edit Profile
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit your Profile: </Modal.Title>
                                        </Modal.Header>
                                        <Form>
                                            <Modal.Body>
                                            <Form.Row>
                                                    <Col>
                                                        <Form.Label>email </Form.Label>
                                                        <Form.Control placeholder="email" required ref={emailRef}/>
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>password </Form.Label>
                                                        <Form.Control placeholder="pw" required ref={passwordRef}/>
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>userName </Form.Label>
                                                        <Form.Control placeholder="un" required ref={usernameRef}/>
                                                    </Col>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Col>
                                                        <Form.Label>First Name </Form.Label>
                                                        <Form.Control placeholder="First name" required ref={firstNameRef}/>
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Last Name </Form.Label>
                                                        <Form.Control placeholder="Last name" required ref={lastNameRef}/>
                                                    </Col>
                                                </Form.Row>

                                                <Form.Group controlId="AboutMeInput">
                                                    <Form.Label>About Me: </Form.Label>
                                                    <Form.Control as="textarea" rows={3} ref={userBioRef}/>
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>My Pet: </Form.Label>
                                                    <Form.Control as="textarea" rows={3} ref={petBioRef}/>
                                                </Form.Group>
                                                <div className="mb-3">
                                                    <Form.File id="formcheck-api-regular">
                                                        <Form.File.Label>Upload a Picture of yourself</Form.File.Label>
                                                        <Form.File.Input />
                                                    </Form.File>
                                                </div>




                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal> */}

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
                    {/* <Card>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}><h3>Questions</h3></Card.Title>
                            <Card.Text> */}
                                <ListGroup >
                                    <ListGroup.Item style={{ textAlign: "center" }}>
                                        <h3>Questions</h3>
                                    </ListGroup.Item>
                                    {userPosts.map(userPost => (
                                    <ListGroup.Item key={userPost.id}>
                                        <Link to={`/question/${userPost.id}`} style={{color: 'black'}}>
                                        {userPost.question}
                                        </Link>
                                    </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            {/* </Card.Text>
                        </Card.Body>
                    </Card> */}
                </Col>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}><h3>Community Contributions</h3></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                {userAnswers.map(userAnswer => (
                                    <ListGroup.Item key={userAnswer.id}>
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
            </Container>
        </div>
    )
}

export default UserProfilePage
