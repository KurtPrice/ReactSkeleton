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
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <h2 className="font-bold text-2xl">This is the App page</h2>
            </Route>
            <Route path="/settings">
              <h2 className="font-bold text-2xl">This is the settings page</h2>
            </Route>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
