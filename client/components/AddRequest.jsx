import React from 'react'

import {getEmployees, getApprovers, getClients, getProjects, getSites, getEm} from '../api'


class AddRequest extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      approvers: [],
      clients: [],
      newRequest: {
        emplNo: "",
        approver_id: 0,
        is_billable: false,
        client_id: 0,
        site_id: 0,
        division: "",
        proj_code: 0,
        topic: "",
        description: "",
        outbound_date: ""
      }
    }
  }

  componentDidMount(){
    getEmployees(this.updateEmployees.bind(this))
    getApprovers(this.updateApprovers.bind(this))
    getClients(this.updateClients.bind(this))
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
  submitRequest(e) {
    e.preventDefault()
    let newRequest = this.state.newRequest
    console.log(newRequest);

  }
  updateRequestState(e) {
    let updatedRequest = this.state.newRequest
    updatedRequest[e.target.name] = e.target.value
    this.setState({newRequest: updatedRequest})
    console.log(updatedRequest);
  }
  isTravelRequestValid(){
    let tr = this.state.newRequest
    return
      tr.emplNo != "" &&
      tr.approver_id != 0 &&
      tr.client_id != 0 &&
      tr.site_id != 0 &&
      tr.division != "" &&
      tr.proj_code != 0 &&
      tr.topic != "" &&
      tr.description != "" &&
      tr.outbound_date != ""
      //return true if valid or false
  }

  render () {
    return (
      <div className="AddRequest-content">
        <form onSubmit={e => this.submitRequest(e)}>

          <div>
            <h3>EMPLOYEE DETAILS</h3>
            <select name="emplNo" onChange={(e) => this.updateRequestState(e)}>
              <option selected disabled>Employee number</option>
              {this.state.employees.map((employee)=>
                <option key={employee.emplNo} value={employee.emplNo}>{employee.emplNo}</option>)}
            </select>
          </div>

          <div>
            <h3>BILLING DETAILS</h3>
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
          </div>

          <div>
            <h3>TRAVEL DETAILS</h3>
            <input name="outbound_date" type="date" onChange={(e) => this.updateRequestState(e)}></input> <br />
            Subject:<br/>
            <input type="text" name="topic" onChange={(e) => this.updateRequestState(e)}/><br/>
            Description:<br/>
            <textarea name="description" rows="15" cols="80" onChange={(e) => this.updateRequestState(e)}></textarea>
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
