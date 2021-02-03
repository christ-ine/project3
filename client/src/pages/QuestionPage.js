import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, ListGroup, Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
// import { format, formatDistanceToNow } from 'date-fns';
// import Topics from '../components/Topics/Topics'
// import Comments from '../components/Comments/Comments'
// import CommentForm from '../components/CommentForm'
import Message from "../components/Message"
import { listQuestionDetails, createQuestionComment } from '../actions/questionActions'
import { listComments } from '../actions/commentActions'


const QuestionPage = ({ match }) => {

    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const questionDetails = useSelector(state => state.questionDetails)
    const { loading, error, question } = questionDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const questionCommentCreate = useSelector(state => state.questionCommentCreate)
    const { success: successQuestionComment, error: errorQuestionComment } = questionCommentCreate

    const commentList = useSelector(state => state.commentList)
    const { loading: loadingComments, error: errorComments, comments } = commentList



    useEffect(() => {
        dispatch(listComments(match.params.id))
    }, [dispatch, match, successQuestionComment])

    useEffect(() => {
        dispatch(listQuestionDetails(match.params.id))
    }, [dispatch, match])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createQuestionComment(match.params.id, {
            comment,
            UserId: userInfo.user.id,
            userName: userInfo.user.userName
        }))
        setComment('')
    }



    return (
        <div>
            <>
                {/* <Header /> */}
                <Row>
                    <Col sm={8}>
                        <Card className='my-3 questionCard' >
                            <Card.Header>
                                <div style={{ fontSize: "22px" }}>
                                    Posted by:{' '}
                                    <Link to={`/profile/${question.UserId}`} style={{ fontWeight: "bold", fontSize: "22px", color: "green" }}>
                                        {question.userName}
                                    </Link>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title as='div' className="questionTitle">{question.question}</Card.Title>
                                <Card.Text as='div' className="questionText px-3">
                                    {question.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='my-3 rounded questionCard'>
                            <Card.Body>
                                {userInfo ? (
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId="comment">
                                            <Form.Label><h4>Answer this question</h4></Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                    </Button>
                                    </Form>
                                ) : (
                                        <Message>
                                            Please <Link to='/login'>sign in</Link> to write a review {' '}
                                        </Message>
                                    )}
                            </Card.Body>
                        </Card>
                        {/* {comments.map(comment => (
                            <Comments questionId={question.id} comment={comment} />
                        ))} */}
                        {comments.length === 0 && <Message>This question currently has no comments. Be the first to comment!</Message>}
                        <ListGroup variant='flush'>
                        {comments.map(comment => (
                            <ListGroup.Item key={comment.id}>
                                <h5>{comment.userName}</h5>
                                <p>{comment.comment}</p>
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                        {/* <Card >
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/profile/${comments.UserId}`} style={{ color: 'black' }}>
                                        {comments.userName}
                                    </Link>
                                </Card.Title>
                                <Card.Text className="px-5"> {comments.comment}</Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <FooterContents>
                        <small className="text-muted">Posted: {comments.createdAt}</small>
                        <div>
                            <LikeButton onClick={increment} />
                            <span>{count}</span>
                            <DislikeButton onClick={decrement} />
                        </div>

                        <ReplyComment />
                    </FooterContents>
                            </Card.Footer>
                        </Card> */}
                    </Col>
                    <Col sm={4}>
                        {/* <Search /> */}
                        {/* <Topics /> */}
                    </Col>
                </Row>

            </>
        </div>
    )
}

export default QuestionPage
