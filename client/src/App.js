import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'
import Header from './components/Header/Header'
import UserProfilePage from './pages/UserProfilePage'
import UserEditProfilePage from './pages/UserEditProfilePage'
import SearchResults from './pages/SearchResults'
import TopicResults from './pages/TopicResults'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/login" component={LoginPage} exact/>
        <Route exact path="/question/:id" component={QuestionPage} />
        <Route path="/profile/:id" component={UserProfilePage} exact/>
        <Route path="/myprofile" component={UserEditProfilePage} exact/>
        <Route path="/searchresults/:keyword" component={SearchResults} />
        <Route path="/topic/:topic" component={TopicResults} />
        <Route path='/' component={HomePage} exact/>
      </Router>

    </div>
  );
}

export default App;
