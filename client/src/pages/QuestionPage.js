import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { format, formatDistanceToNow } from 'date-fns';
// import Topics from '../components/Topics/Topics'
// import Comments from '../components/Comments/Comments'
// import CommentForm from '../components/CommentForm/CommentForm'
import { listQuestionDetails } from '../actions/questionActions'


const QuestionPage = ({ match }) => {

    const dispatch = useDispatch()

    const questionDetails = useSelector(state => state.questionDetails)
    const { loading, error, question } = questionDetails

    useEffect(() => {
        dispatch(listQuestionDetails(match.params.id))
    }, [dispatch, match])


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
                        {/* <CommentForm handleSubmit={handleSubmit} commentRef={commentRef} />
                        {comments.map(comment => (
                            <Comments questionId={question.id} comment={comment} />
                        ))} */}
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
