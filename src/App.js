import React from'react'
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './views/Product'
import Home from './views/Home'
import Settings from './views/Settings'

function App() {
  return (
    <div >
        <Router>
          <Header />
          <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
          </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
