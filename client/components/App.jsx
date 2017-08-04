import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar'
import AddRequest from './AddRequest'
import RequestsAll from "./RequestsAll"
import RequestView from "./RequestView"
import Home from "./Home"
import Clients from "./Clients"

import {getApprovers, getClients, getEmployees, getProjects, getSites, getRequests} from '../api'


class App extends React.Component {

  constructor(props) {
    super(props)
     this.state={
       companyData: {},
      //  requests: getRequests()
       [
        {
          request_id: 1,
          emplNo: "E000",
          name: "test request one",
          client_id: 1,
          proj_code: 11203,
          approver_id: 4,
          is_billable: true,
          site_id: 4,
          division: "Dublin",
          description: "hello hello from memory"
        },
        {request_id: 2,
        name: "test request two"}
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
  this.requestEmployees()
  this.requestProjects()
  this.requestSites()
  this.requestRequests()
}
saveData(err, data, name) {
  let companyData = this.state.companyData
  companyData[name] = data
  this.setState({err, companyData})
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
requestRequests(){
  getRequests(this.saveData.bind(this))
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
              <Route path = "/allRequests" render={(props) => <RequestsAll requests={this.state.requests || []} />} />
              <Route path = "/submit" render={(props) => <AddRequest saveRequest={this.saveRequest.bind(this)} companyData={this.state.companyData}/> } />
              <Router path = "/clients" component={Clients} />
              <Route path = "/requestView/:id" component={(props) => <RequestView request={this.state.requests.find(request => request.request_id == props.match.params.id)}/>} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}


export default App
