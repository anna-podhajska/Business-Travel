import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {getRequests} from "../api"
import {toDateOnly, toDateAndHour} from "../util/dateFormat"

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
  updateAllRequests(err, requestsFromDB){
    if (!err){
      this.setState({requests: requestsFromDB})
    }
  }

  // mappingOver(item){
  //   return
  //   {this.state.requests.map((request) =>
  //     <Link key={request.request_id.toString()} to={"/requestView/" + request.request_id}>
  //     <span className="RequestsAll-request">{item}</span> </Link>)}
  // }

  render() {
    return (
      <div className="RequestsAll-content">
        <div className="RequestsAll-box RequestsAll-title">
          <h1> All travel requests submitted </h1>
        </div>
        <div className="RequestsAll-box">
          <table className="RequestsAll-table">
            <tr>
              <th>Request id</th>
              <th>Title</th>
              <th>Created</th>
              <th>Outbound date</th>
              <th>Approval status</th>
            </tr>

            {this.state.requests.map(
              (request) => (<tr>
                <td>{request.request_id}</td>
                <td><Link key={request.request_id.toString()} to={"/requestView/" + request.request_id}>{request.topic}</Link></td>
                <td>{toDateAndHour(request.created_at)}</td>
                <td>{toDateOnly(request.outbound_date)}</td>
                <td>{request.approval_status}</td>
            </tr>)
          )}
          </table>
        </div>
      </div>
    )
  }
}

export default RequestsAll
