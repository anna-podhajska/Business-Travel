import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar'
import AddRequest from './AddRequest'
import RequestsAll from "./RequestsAll"
import RequestView from "./RequestView"
import Home from "./Home"

import {getApprovers, getClients, getEmployees, getProjects, getSites} from '../api'


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
componentDidMount() {
  this.requestApprovers()
  this.requestClients()
}
saveData(err, data, name) {
  this.setState({err, [name]: data})
}
requestApprovers() {
  getApprovers(this.saveData.bind(this))
}
requestClients() {
  getClients(this.saveData.bind(this))
}
requestEmployees(){
  getEmployees(this.saveData.bind(this))
}
requestProjects(){
  getProjects(this.saveData.bind(this))
}
requestSites(){
  getSites(this.saveData.bind(this))
}

  render() {
    console.log(this.state);
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
