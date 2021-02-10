import React from'react'
import Header from './components/Header'
import Footer from './components/Footer'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div >
        <Header />

        <Router>
          <ul>
            <li>
              <Link to="/" className="text-blue-500"></Link>
            </li>
            <li>
              <Link to="/settings" className="text-blue-500"></Link>
            </li>
          </ul>
        </Router>

        <Footer />
    </div>
  );
}

export default App;
