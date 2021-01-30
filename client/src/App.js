import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/login" component={LoginPage} exact/>
      </Router>

    </div>
  );
}

export default App;
