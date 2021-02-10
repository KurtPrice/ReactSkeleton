import React from'react'
import Header from './components/Header'
import Footer from './components/Footer'
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div >
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <h2>This is the App page</h2>
            </Route>
            <Route path="/settings">
              <h2>This is the settings page</h2>
            </Route>
          </Switch>
        </Router>

        <Footer />
    </div>
  );
}

export default App;
