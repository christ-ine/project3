import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { listQuestionSearch } from '../actions/questionActions'

const SearchBox = ({ history }) => {

    const [keyword, setKeyword] = useState('')

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/searchresults/${keyword}`)
            dispatch(listQuestionSearch(keyword))
        } else {
            history.push('/')
        }
    }

    console.log(keyword)
    

    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control 
                type='text' 
                name='q' 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder='Search by keyword...' 
                className='mr-sm-2 ml-sm-5'>
            </Form.Control>
            <Button type='submit' variant='secondary' className='p-2'>
                Search
            </Button>

        </Form>
    )
}

export default SearchBox
