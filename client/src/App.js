import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/login" component={LoginPage} exact/>
        <Route path='/' component={HomePage} exact/>
      </Router>

    </div>
  );
}

export default App;
