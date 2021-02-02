import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Badge, Card } from 'react-bootstrap'

const Questions = ({ question }) => {

    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Header className="questionDiv">
                {/* <small className="text-muted"> */}
                <div style={{ fontSize: "22px" }}>
                    Posted by:{' '}
                    <Link to={`/profile/${question.UserId}`} style={{ fontWeight: "bold", fontSize: "22px", color: "green" }}>
                        {question.userName}
                    </Link>
                </div>
                <div>
                    {question.createdAt} ago
                        </div>

                {/* </small> */}
            </Card.Header>
            <Card.Body>
                <Link to={`/question/${question.id}`}>
                    <Card.Title as='div'>
                        <strong>{question.question}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>{question.content}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Badge pill variant="success">
                    {question.topic}
                </Badge>
                {/* <div className="comments_icon">
                            <FaRegComments />
                        </div> */}
            </Card.Footer>
        </Card>
    )
}

export default Questions
