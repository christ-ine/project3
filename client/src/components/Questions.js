import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Badge, Card } from 'react-bootstrap'
import { listComments } from '../actions/commentActions'

const Questions = ({ question }) => {

    // const dispatch = useDispatch()

    // const commentList = useSelector(state => state.commentList)
    // const { loading: loadingComments, error: errorComments, comments } = commentList

    // useEffect(() => {
    //     dispatch(listComments(question.id))
    // }, [dispatch])

    // console.log(comments.length)

    return (
        <Card className='my-3'>
            <Card.Body className="mx-2">
                <Link to={`/question/${question.id}`}>
                    <Card.Title as='div' style={{ color: 'black' }}>
                        <h3>{question.question}</h3>
                    </Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">
                    <small>
                    {moment(question.createdAt).fromNow(true)} ago by:{' '}
                        <Link to={`/profile/${question.UserId}`} style={{ fontWeight: "bold", color: "green" }}>
                            {question.userName}
                        </Link>
                    </small>
                </Card.Subtitle>

                <Card.Text className="py-3" as='div'><p>{question.content}</p></Card.Text>
            </Card.Body>
            <Card.Footer>
                <Badge pill variant="success">
                    <Link to={`/topic/${question.topic}`} style={{textDecoration: "none", color: 'white'}}>
                    {question.topic}
                    </Link>
                </Badge>
                
                {/* <div className="comments_icon">
                            <FaRegComments />
                        </div> */}
            </Card.Footer>
        </Card>
    )
}

export default Questions
