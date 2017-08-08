import React from 'react'
import {getRequest, updateRequestApprovalStatus} from "../api"
import {toDateOnly, toDateAndHour} from "../util/dateFormat"

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
  updateApprovalStatus(e){
    let approval_status = e.target.value
    updateRequestApprovalStatus(
      this.state.travelRequest.request_id,
      {approval_status: e.target.value},
      (err) => {
        if (!err) {
          let tr = this.state.travelRequest
          tr.approval_status = approval_status
          this.setState({travelRequest: tr})
        } else {
          console.log(err)
        }
      }
    )
  }
  updateRequest(err, travelRequestData){
    if (!err) {
      console.log(travelRequestData);
      this.setState({travelRequest: travelRequestData}) //podstawiamy w this.state dane z DB
    }
  }

  render() {
    let request = this.state.travelRequest
    return (
      <div className="RequestView-container RequestView-box">
        <div className="RequestView-pgeTitle RequestView-box">
          <h1> Travel request no. {request.request_id} details </h1>
        </div>
        <div className="RequestView-approval_status RequestView-box">
          <h4>Approval</h4>
          <span>
            approval status: <span className="color1">{request.approval_status}</span><br />
            approver name: {request.approver_name}
          </span>
        </div>
        <div className="RequestView-contactDetails RequestView-box">
          <h4>Employee details</h4>
          <span>
            Employee number: {request.emplNo} <br />
            Name: {request.name} <br />
            Site name: {request.site_name} <br />
            Company Division name: {request.division} <br />
            Position: {request.position} <br />
            Email: {request.email} <br />
            Phone: {request.phone} <br />
          </span>
        </div>
        <div className="RequestView-billingDetails RequestView-box">
          <h4>Billing details</h4>
          Is travel cost billable to the customer? {request.is_billable ? "billable" : "non-billable"} <br />
          Project code: {request.proj_code} <br />
          Project name: {request.proj_name} <br />
        </div>
        <div className="RequestView-dateDetails RequestView-box">
          <h4>Travel date</h4>
          Outbound date: {request.outbound_date} <br />
        </div>
        <div className="RequestView-topicDetails RequestView-box">
          <h4>Description</h4>
            <p>Topic: {request.topic}</p>
            <p> Description: {request.description}</p>
            <p><i> Date created: {request.created_at}</i></p>
        </div>
        <div className="RequestView-approval RequestView-box">
          <h4 className="color1">Change approval status:</h4>
          <select name="approval_status" onChange={(e)=> this.updateApprovalStatus(e)}>
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
