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
              <Link to="/" className="text-blue-500">App</Link>
            </li>
            <li>
              <Link to="/settings" className="text-blue-500">Settings</Link>
            </li>
          </ul>
        </Router>

        <Switch>
          <Route exact path="/">
            <h2>This is the App page</h2>
          </Route>
          <Route path="/settings">
            <h2>This is the settings page</h2>
          </Route>
        </Switch>

        <Footer />
    </div>
  );
}

export default App;
