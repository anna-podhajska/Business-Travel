import React from 'react'
import {Redirect} from 'react-router-dom'

import {getEmployees, getApprovers, getClients, submitNewRequest, getProjects} from '../api'


class AddRequest extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      approvers: [],
      clients: [],
      projects: [],
      newRequest: {
        emplNo: "",
        approver_id: "0",
        is_billable: false,
        client_id: "0",
        site_id: 0,
        division: "none",
        proj_code: 0,
        topic: "",
        description: "",
        outbound_date: "",
      },
      site_name: "none",
      selected_employee: {},
      perform_redirect: false
    }
  }
  componentDidMount(){
    getEmployees(this.updateEmployees.bind(this))
    getApprovers(this.updateApprovers.bind(this))
    getClients(this.updateClients.bind(this))
    getProjects(this.updateProjects.bind(this))
  }
  updateEmployees(err, employeesArray) {
    if (!err) {
      this.setState({employees: employeesArray})
    }
  }
  updateApprovers(err, approversArray){ //take from api and update into state
    if (!err) {
      this.setState({approvers: approversArray})
    }
  }
  updateClients(err, clientsArray){
    if (!err) {
      this.setState({clients: clientsArray})
    }
  }
  updateProjects(err, projectsArray){
    if (!err) {
      this.setState({projects: projectsArray})
    }
  }
  submitRequest(e) {
    e.preventDefault()
    let newRequest = this.state.newRequest
    if (this.isTravelRequestValid()) {
      submitNewRequest(newRequest, this.displaySubmittionStatus.bind(this))
    } else {
      console.log('Travel request invalid ', newRequest);
    }
  }
  displaySubmittionStatus(err) {
    if (err) {
      alert("error submitting request")
    } else {
      this.setState({perform_redirect: true})
    }
  }
  updateRequestState(e) {
    let updatedRequest = this.state.newRequest
    updatedRequest[e.target.name] = e.target.value
    this.setState({newRequest: updatedRequest})
  }
  updateRequestOutboundDate(e) {
    let updatedRequest = this.state.newRequest
    let newDate = new Date (e.target.value)
    newDate = newDate.toISOString().split('T')[0]
    updatedRequest[e.target.name] = newDate
    this.setState({newRequest: updatedRequest})
  }
  updateRequestStateForEmployee(e){
    this.updateRequestState(e)

    let updatedRequest = this.state.newRequest
    let emplNo = updatedRequest.emplNo
    let employeeDetails = this.state.employees.find((emp) => emp.emplNo === emplNo)
    updatedRequest.division = employeeDetails.division
    updatedRequest.site_id = employeeDetails.site_id
    this.setState(
      {newRequest: updatedRequest,
      site_name: employeeDetails.site_name,
      selected_employee: employeeDetails}
  )}
  isTravelRequestValid(){
    let tr = this.state.newRequest
    return (
      tr.approver_id !== "0" &&
      tr.client_id !== "0" &&
      tr.description !== "" &&
      tr.division !== "none" &&
      tr.emplNo !== "" &&
      tr.outbound_date !== "" &&
      tr.proj_code !== 0 &&
      tr.site_id !== 0 &&
      tr.topic !== ""
    )
      //return true if valid or false
  }

  render () {
    const perform_redirect = this.state.perform_redirect

    if (perform_redirect === true) {
      return (
        <Redirect to="/allRequests" />
      )
    }

    return (
      <div className="AddRequest-content">

        <div className="AddRequest-box">
          <h1 className="AddRequest-title"> New travel request </h1>
        </div>
        <form onSubmit={e => this.submitRequest(e)}>
          <div className="AddRequest-box emplDetailsBox">

            <div className="AddRequest-selectEmplNo">
              <h3>Employee details</h3>
              <select name="emplNo" onChange={(e) => this.updateRequestStateForEmployee(e)}>
                <option selected disabled>Employee number</option>
                {this.state.employees.map((employee)=>
                <option key={employee.emplNo} value={employee.emplNo}>{employee.emplNo}</option>)}
              </select>
            </div>
            <div className="AddRequest-emplDetails-results">
              <ul>
                <li>Site: {this.state.site_name}</li>
                <li>Division: {this.state.newRequest.division}</li>
                <li>Position: {this.state.selected_employee.position || ""}</li>
                <li>Phone: {this.state.selected_employee.phone || ""}</li>
                <li>Email: {this.state.selected_employee.email || ""}</li>
                <li>Name: {this.state.selected_employee.name || ""}</li>
              </ul>
            </div>

          </div>

          <div className="AddRequest-box">
            <h3>Billing details</h3>
            <select name="approver_id" onChange={(e) => this.updateRequestState(e)}>
              <option selected disabled>approver name</option>
              {this.state.approvers.map((approver)=>
                <option key={approver.approver_id} value={approver.approver_id}>{approver.name}</option>)}
            </select>
            <select name="is_billable" onChange={(e) => this.updateRequestState(e)}>
              <option selected disabled>is billable to customer?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <select name="client_id" onChange={(e) => this.updateRequestState(e)}>
              <option selected disabled>client name</option>
              {this.state.clients.map((client)=>
                <option key={client.client_id} value={client.client_id}>{client.name}</option>)}
            </select>
            <select name="proj_code" onChange={(e) => this.updateRequestState(e)}>
              <option selected disabled>project name</option>
              {this.state.projects.map((project)=>
              <option key={project.proj_code} value={project.proj_code}>{project.proj_name}</option>)}
            </select>
          </div>

          <div className="AddRequest-box">
            <h3>Travel details</h3>
            <input name="outbound_date" type="date" onChange={(e) => this.updateRequestOutboundDate(e)}></input> <br />
            Subject:<br/>
            <input className="AddRequest-inp-subj" type="text" name="topic"
              onChange={(e) => this.updateRequestState(e)}/><br/>
            Description:<br/>
            <textarea className="AddRequest-inp-message" name="description" rows="15" cols="80"
              onChange={(e) => this.updateRequestState(e)}></textarea>
          </div>

          <input type="submit" value="Submit new request"/>
        </form>
      </div>
    )
  }
}

export default AddRequest

{
/*
EMPLOYEE DETAILS
table.string('emplNo')  + inne z employees, contact itd

BILLING
table.integer('approver_id')
table.boolean('is_billable')
table.integer('proj_code')  + name
table.integer('client_id')

TRAVEL D
table.date('outbound_date')
table.string('topic')
table.text('description')
*/
}
