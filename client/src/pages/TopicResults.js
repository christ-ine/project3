import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Questions from '../components/Questions'
import TopicList from '../components/TopicList'
import { listQuestionTopic } from '../actions/questionActions'

const TopicResults = ({ match }) => {

    const topic = match.params.topic
    const dispatch = useDispatch()

    const questionTopic = useSelector(state => state.questionTopic)
    const { loading, error, questions } = questionTopic

    console.log(questions)

    useEffect(() => {
        dispatch(listQuestionTopic(topic))
    }, [dispatch, match])

    
    
    
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>
                        {questions.map(question => (
                            <Questions question={question} />
                        ))}
                    </Col>
                    
                    <Col sm={4}>
                        
                        <TopicList />
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}

export default TopicResults