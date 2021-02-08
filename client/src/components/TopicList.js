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
        <ListGroup className="my-3" >
             <ListGroup.Item style={{ textAlign: "center" }}>
                <h3>Topics</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to={`/topic/feeding`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5 >Feeding</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/potty training`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Potty Training</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/exercise`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Exercise</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/behavioral training`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Exercise</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list" >
                <Link to={`/topic/toys`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Toys</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list" >
                <Link to={`/topic/housing`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Housing</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/sleeping`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Small Animals</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/socializing`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Large Animals</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/accessories`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Reptiles</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/health`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Amphibians</h5>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="topic__list">
                <Link to={`/topic/misc`} style={{ textDecoration: "none", color: 'black' }}>
                    <h5>Exotic Pets</h5>
                </Link>
            </ListGroup.Item>

        </ListGroup>
    )
}

export default TopicList
