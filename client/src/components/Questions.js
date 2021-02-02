import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ question }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Body>
            <Link to={`/question/${question.id}`}>
                <Card.Title as='div'>
                    <strong>{question.question}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>{question.content}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
