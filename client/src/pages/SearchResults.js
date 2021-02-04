import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Questions from '../components/Questions'
import { listQuestionSearch } from '../actions/questionActions'

const SearchResults = ({ match }) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()

    const questionSearch = useSelector(state => state.questionSearch)
    const { loading, error, questions } = questionSearch

    console.log(questions)

    useEffect(() => {
        dispatch(listQuestionSearch(keyword))
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
                    
                    {/* <Col sm={4}>
                        <Search />
                        <Topics />
                    </Col> */}
                   
                </Row>
            </Container>
        </div>
    )
}

export default SearchResults
