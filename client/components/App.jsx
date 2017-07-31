import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar'
import AddRequest from './AddRequest'

const App = () => {
  return (

    <div className="container">
      <Router>
        <div className="container">
          <Route path = "/" component={NavBar} />
          <Route path = "/submit" component={AddRequest} />
        </div>
      </Router>
    </div>
  )
}

export default App
