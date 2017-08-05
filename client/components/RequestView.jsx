import React from 'react'
import {getRequest} from "../api"

class RequestView extends React.Component{

  constructor(props)  {
    super(props)
    this.state = {
      travelRequest: {
        topic: "",
        created_at: "",
        outbound_date: "",
        description: "",
        division: "",
        email: "",
        emplNo: "",
        employee_id: 0,
        is_billable: 0,
        name: "",
        phone: "",
        position: "",
        proj_code: 0,
        request_id: 0,
        site_name: "",
        approval_status: ""
      }
    }
  }

  componentDidMount(){
    getRequest(this.props.request_id, this.updateRequest.bind(this))
  }

  updateRequest(err, travelRequestData){
    if (!err) {
      console.log(travelRequestData);
      this.setState({travelRequest: travelRequestData})
    }
  }

  render() {
    let request = this.state.travelRequest
    return (
      <div className="RequestView-container">
        <h1> Travel request no. {request.request_id} details </h1>
        <div className="RequestView-approval_tatus"> Approved? {request.approval_status}</div>
        <div className="RequestView-contactDetails">
          Employee number: {request.emplNo} <br />
          Name: {request.name} <br />
          Site name: {request.site_name} <br />
          Company Division name: {request.division} <br />
          Position: {request.position} <br />
          Email: {request.email} <br />
          Phone: {request.phone} <br />
        </div>
        <hr />
        Is travel cost billable to the customer? {request.is_billable ? "billable" : "non-billable"} <br />
        Project code: {request.proj_code} <br />
        Project name: {request.proj_name} <br />
        <hr />
        Date created: {request.created_at} <br />
        Outbound date: {request.outbound_date} <br />
        <hr />
        Topic: {request.topic} <br />
        <hr />
        Description: {request.description} <br />
        <hr />
        <div className="RequestView-approval">
          <select>
            <option disabled selected="default={request.approval_status}">{request.approval_status}</option>
            <option value="pending_approval">pending approval</option>
            <option value="approved">approved</option>
            <option value="declined">declined</option>
          </select>
        </div>
      </div>
    )
  }


}

export default RequestView
