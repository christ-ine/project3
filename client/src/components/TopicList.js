import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap'
import { listQuestionSearch } from '../actions/questionActions'

const TopicList = ({ history }) => {

    const [keyword, setKeyword] = useState('')

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/searchresults/${keyword}`)
            dispatch(listQuestionSearch(keyword))
        } else {
            history.push('/')
        }
    }

    console.log(keyword)


    return (
        <ListGroup>
            <ListGroup.Item>
                <Link to={`/topic/feeding`} style={{ textDecoration: "none" }}>
                    <h5 >Feeding</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/potty training`} style={{ textDecoration: "none" }}>
                    <h5>Potty Training</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/exercise`} style={{ textDecoration: "none" }}>
                    <h5>Exercise</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list" >
                <Link to={`/topic/toys`} style={{ textDecoration: "none" }}>
                    <h5>Toys</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list" >
                <Link to={`/topic/housing`} style={{ textDecoration: "none" }}>
                    <h5>Housing</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/small animals`} style={{ textDecoration: "none" }}>
                    <h5>Small Animals</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/large animals`} style={{ textDecoration: "none" }}>
                    <h5>Large Animals</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/reptiles`} style={{ textDecoration: "none" }}>
                    <h5>Reptiles</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/amphibians`} style={{ textDecoration: "none" }}>
                    <h5>Amphibians</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/exotic pets`} style={{ textDecoration: "none" }}>
                    <h5>Exotic Pets</h5>
                </Link>
            </ListGroup.Item>

        </ListGroup>
    )
}

export default TopicList
