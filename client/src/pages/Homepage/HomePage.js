import React, { useEffect, useState, useRef } from 'react'
import { Row, Col, Container, Alert, Button } from 'react-bootstrap'
import HeroSection from '../../components/HeroSection/'
import AllQuestions from '../../components/AllQuestions.js'
import API from '../../utils/API'
// import Question from '../../components/Question/Question'
import Header from '../../components/Header'
import Topics from '../../components/Topics/Topics'
import Search from '../../components/Search/Search'
import { Redirect } from "react-router-dom"
// import questions from '../../questions'
import './style.css'


const HomePage = () => {
    const [questions, setQuestions] = useState([])
    const [questionSearch, setQuestionSearch] = useState("");
    const [notLoggedIn, setNotLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);
    const questionRef = useRef();
    const contentRef = useRef();
    // const userRef = useRef();
    const topicRef = useRef();
    

    useEffect(() => {
        loadQuestions()
    }, [questions.UserId])

    useEffect(() => {
        loadCurrentUser()
    }, [])

    function loadQuestions() {
        API.getPosts()
            .then(res =>
                setQuestions(res.data)
            )
            .catch(err => console.log(err));
    };
    
    function loadCurrentUser() {
        API.getMyProfile()
            .then(res =>
                setCurrentUser(res.data[0])
            )
            .catch(err => console.log(err));
    };

    const handleSubmit = e => {
        e.preventDefault();
        API.addPost({
            question: questionRef.current.value,
            content: contentRef.current.value,
            topic: topicRef.current.value,
            UserId: currentUser.id
            // user: userRef.current.value
        })
            .then(result => {
                    loadQuestions();
                })

            .catch(err => console.log(err));

        questionRef.current.value = "";
        contentRef.current.value = "";
        topicRef.current.value = "";
        

    };

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setQuestionSearch(value);
      };
    
      const handleFormSubmit = event => {
        
        event.preventDefault();
        API.searchPosts(questionSearch)
        //   .then(res => setQuestions(res.data))
        .then(res => setQuestions(res.data))
          .catch(err => console.log(err));
      };


    //   console.log()


    return (
        <>
        {/* <Header currentUser={currentUser}/> */}
            <HeroSection currentUser={currentUser} handleSubmit={handleSubmit} questionRef={questionRef} contentRef={contentRef} topicRef={topicRef} />
            {/* <div className="home_container"> */}
            {/* {notLoggedIn && <Redirect to="/login"/>} */}
            {/* {notLoggedIn && <AlertDismissibleExample />} */}
            <Container>
                <Row>
                    <Col  sm={8}>
                        {questions.map(question => (
                        <AllQuestions post={question} />
                        ))}
                    </Col>
                    {/* <div className="topic_contianer"> */}
                    <Col sm={4}>
                        <Search handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} questionSearch={questionSearch}/>
                        <Topics />
                    </Col>
                    {/* </div> */}
                </Row>
            </Container>


        </>
    )
}

export default HomePage
