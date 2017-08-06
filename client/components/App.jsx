import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar'
import AddRequest from './AddRequest'
import RequestsAll from "./RequestsAll"
import RequestView from "./RequestView"
import Home from "./Home"
import Clients from "./Clients"

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Router>
          <div className="app-page-container">
            <div className="app-nav-bar">
              <Route path = "/" component={() => <NavBar pathHome="/"  pathSubmit="/submit" pathAllRequests="/allRequests" />} />
            </div>
            <div className="app-contents">
              <Route exact path = "/" component={Home} />
              <Route path = "/allRequests" component={RequestsAll} />
              <Route path = "/submit" component={AddRequest} />
              <Router path = "/clients" component={Clients} />
              <Route path = "/requestView/:id" component={(props) => <RequestView request_id={props.match.params.id}/>} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}


export default App
