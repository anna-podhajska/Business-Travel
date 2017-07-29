import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import AddRequest from './AddRequest'

const App = () => {
  return (

    <div>
      <h1>Company business travel request</h1>
      <Router>
        <div className="container">
          <Route path = "/" component={AddRequest} />
        </div>
      </Router>
    </div>
  )
}

export default App
