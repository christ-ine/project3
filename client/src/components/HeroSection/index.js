import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroImage from '../../images/dogBG3.jpg'
import { Modal, Form } from 'react-bootstrap'
import { Button } from '../ButtonElement'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, QuestionEmpty, QuestionFilled } from './HeroElements';
import { createQuestion } from '../../actions/questionActions'
import { QUESTION_CREATE_RESET } from '../../constants/questionConstants'
import { listQuestions } from '../../actions/questionActions'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [topic, setTopic] = useState('')

    const dispatch = useDispatch()

    const questionCreate = useSelector(state => state.questionCreate)
    const { loading, error, success } = questionCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const questionList = useSelector(state => state.questionList)
    // const { loading, error, questions } = questionList

    useEffect(() => {
        
            dispatch(listQuestions())
        
    }, [dispatch, success])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onHover = () => {
        setHover(!hover)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createQuestion({
            userName: userInfo.user.userName,
            question: title,
            content,
            topic,
            UserId: userInfo.user.id,

        }))
        dispatch(listQuestions())
        setTitle("")
        setContent("")
        setTopic("")
    }


    return (
        <>

            <HeroContainer id="home">
                <HeroBg>
                    <ImageBg src={HeroImage} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>PawPals</HeroH1>
                    <HeroP>Helping pet parents one paw at a time</HeroP>
                    <HeroBtnWrapper>
                        <Button to="askquestion" big='true' fontBig='true' primary='true' onMouseEnter={onHover} onMouseLeave={onHover} onClick={handleShow}>
                            Ask a Question! {hover ? <QuestionEmpty /> : <QuestionFilled />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ask the PawPals community a question!</Modal.Title>

                </Modal.Header>
                {loading && <Loader />}
                {error && <Message variant='danger'>{error}</Message>}
                {userInfo ? (
                    <Form onSubmit={submitHandler}>
                        <Modal.Body>


                            <Form.Group controlId="UserQuestionInput">
                                <Form.Label>What would you like to ask?</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Enter question'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="title">
                                <Form.Label>Anymore information you would like to add?</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder='Enter Details'
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Topic</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)} >
                                    <option>Select a topic</option>
                                    <option>Feeding</option>
                                    <option>Potty Training</option>
                                    <option>Exercise</option>
                                    <option>Training</option>
                                    <option>Toys</option>
                                    <option>Housing</option>
                                    <option>Small Animals</option>
                                    <option>Large Animals</option>
                                    <option>Reptiles</option>
                                    <option>Amphibians</option>
                                    <option>Exotic Pets</option>
                                </Form.Control>
                            </Form.Group>



                        </Modal.Body>
                        <Modal.Footer>

                            <Button variant="primary" type="submit" onClick={() => setShow(false)}>
                                Submit
                        </Button>
                        </Modal.Footer>
                    </Form>
                ) : (
                        <Message variant='danger'>You must be logged in to do that</Message>
                    )}
            </Modal>
        </>
    )
}

export default HeroSection
