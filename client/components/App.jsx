import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar'
import AddRequest from './AddRequest'
import AllRequests from "./AllRequests"
import Home from "./Home"


const App = () => {
  return (
    <div className="home-container">
      <Router>
        <div className="container">
          <div className="nav-bar">
            <Route path = "/" component={NavBar} />
          </div>
          <div className="main-contents">
            <Route path = "/" component={Home} />
            <Route path = "/submit" component={AddRequest} />
            <Route path = "/allRequests" component={AllRequests} />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
