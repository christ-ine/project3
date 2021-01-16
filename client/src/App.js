import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Homepage/HomePage'
import QuestionPage from './pages/QuestionPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
// import { Login } from './components/login/login'
// import { Register } from './components/login/register'
// import LoginPage from './components/loginpage'
import MyProfile from './pages/MyProfile/index.js'
import TopicPage from './pages/TopicPage'
import SearchResults from './pages/SearchResults'
import CurrentProfile from './pages/CurrentProfile/CurrentProfile'




const App = () => {


  return (
    <div className='app__main'>
      <Router>
        
          <Header />


          <main>
            <Route exact path="/" component={HomePage} />
            <Container>

              <Route exact path="/question/:currentQuestionId" component={QuestionPage} />
              <Route path="/profile/:profileId" component={MyProfile} exact/>
              <Route path="/myprofile" component={CurrentProfile} exact/>
              <Route path="/topic/:topic" component={TopicPage} exact/>
              <Route path="/searchresults" component={SearchResults} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/register" component={Register} exact/>



              {/* <Route path='/login' component={LoginPage} exact /> */}
              {/* <Route path='/login' component={Register} exact />
              <Route path='/login' component={Login} exact /> */}


            </Container>
          </main>
          <Footer />
       

      </Router>
    </div>
  )
}

export default App

