import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import Questions from '../components/Questions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import HeroSection from '../components/HeroSection/index'
import TopicList from '../components/TopicList'
import { listQuestions } from '../actions/questionActions'


const HomePage = () => {

    const dispatch = useDispatch()

    const questionList = useSelector(state => state.questionList)
    const { loading, error, questions } = questionList

    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails

    console.log(questions)

    useEffect(() => {
        dispatch(listQuestions())
    }, [dispatch])

    
    

    return (
        <>
            <HeroSection />
        
            <Container>
            {loading ? (<Loader />)
            : error ? (
            <Message variant='danger'>{error}</Message>
            ) :(
                <>
                    <h3 style={{paddingTop: '20px', paddingBottom: '10px'}}>Latest Posts</h3>
                <Row>
                    <Col sm={8}>
                    {questions.map(question => (
                    // <Col key ={question.id} sm={12} md={6} lg={4} xl={3}>
                        <Questions key ={question.id} question={question}/>
                    // </Col>
                ))}
                    </Col>
                    <Col sm={4}>
                        
                        <TopicList />
                    </Col>
                
            </Row>
            </>
            
            )}
            </Container>
        </>
    )
}

export default HomePage
