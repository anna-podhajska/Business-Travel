import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar'
import AddRequest from './AddRequest'
import RequestsAll from "./RequestsAll"
import RequestView from "./RequestView"
import Home from "./Home"


class App extends React.Component {

  constructor(props) {
    super(props)
     this.state={
       requests: [
        {id: 1,
        name: "test"},
        {id: 2,
        name: "test2"}
       ]
     }
  }

saveRequest(request) {

  this.setState({
    requests: [...this.state.requests, request]
  })

}

  render() {
    return (
      <div className="home-container">
        <Router>
          <div className="container">
            <div className="nav-bar">
              <Route path = "/" component={NavBar} />
            </div>
            <div className="main-contents">
              <Route path = "/" component={Home} />
              <Route path = "/submit" render={(props) => <AddRequest saveRequest={this.saveRequest.bind(this)} /> } />
              <Route path = "/allRequests" render={(props) => <RequestsAll requests={this.state.requests} />} />
              <Route path = "/requestView" component={RequestView} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}


export default App
