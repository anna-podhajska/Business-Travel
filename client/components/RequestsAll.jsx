import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {getRequests} from "../api"

class RequestsAll extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      requests: []
    }
  }

  componentDidMount(){
    getRequests(this.updateAllRequests.bind(this))
  }

  updateAllRequests(err, requestsFromDB) {
    if (!err) {
      this.setState({requests: requestsFromDB})
    }
  }

  render() {
    return (
      <ul>
        {this.state.requests.map((request) =>
          <Link key={request.request_id.toString()} to={"/requestView/" + request.request_id}>
          <li className="RequestsAll-request"> {request.request_id}</li> </Link>)}
      </ul>
    )
  }

}

export default RequestsAll
