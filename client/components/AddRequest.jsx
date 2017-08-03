import React from 'react'
import employees from '../../data/employees.js'
import sites from '../../data/sites.js'
import clients from '../../data/clients.js'
import projects from '../../data/projects.js'
import approvers from '../../data/approvers.js'

import {getApprovers, getClients, getProjects, getSites, getEm} from '../api'

export default class AddRequest extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      newRequest: {},
      companyData: props.companyData
    }
    console.log(props.companyData);
    this.submitRequest = this.submitRequest.bind(this)
    this.updateNewRequest = this.updateNewRequest.bind(this)
  }
  componentWillReceiveProps({companyData}) {
    this.setState({companyData})
  }
  updateNewRequest(e) {
    let newRequest = this.state.newRequest
    newRequest[e.target.name] = e.target.value
    this.setState({newRequest: newRequest})
  }

  submitRequest(e) {
    // console.log(this.state);
    e.preventDefault()
    this.props.saveRequest(this.state.newRequest)
    // this.setState([e.target.name]: e.target.value)
  }

  _renderEmplNo() {
    return ((this.state.companyData.employees||[]).map(function(employee, i) {
        return (
         <option key={i} value={employee.employee_id}> {employee.emplNo}</option>
        )
    }))
  }
  _renderEmplDivision() {
    return ((this.state.companyData.employees||[]).map((empl, i)=> <option key={i}> {empl.division}</option>))
  }
  _renderSite(sites) {
    return((this.state.companyData.sites||[]).map(function(site, i) {
      return <option key={i} value={site.site_id}> {site.name} </option>
    }))
  }
  _renderClient() {
    return((this.state.companyData.clients||[]).map((client, i) => <option key={i} value={client.client_id}> {client.name}</option>
    ))
  }
  _renderProject() {
    return((this.state.companyData.projects||[]).map((project, i) => <option key={i}> {project.proj_name} {project.proj_code}</option>
    ))
  }
  _renderApprovers() {
    return((this.state.companyData.approvers||[]).map((approver, i) => <option key={i} value={approver.approver_id}> {approver.name}</option>
    ))
  }

  render () {
    console.log(this.state);
    return (
      <div className="content">
        <form onSubmit={e => this.submitRequest(e)}>

          <div className="form personalDet">
            <label> Personal details </label><br/>
            <input name="name" placeholder="name as in the passport" type="text" onChange={(e) => this.updateNewRequest(e)}/>
            <select name="employee_id" onChange={(e) => this.updateNewRequest(e)}>
              <option  selected disabled> employee number </option>
              {this._renderEmplNo()}
            </select>
            <select name="division" onChange={(e) => this.updateNewRequest(e)}>
              <option  selected disabled> division </option>
              {this._renderEmplDivision()}
            </select>
          </div>

          <div className="form contactDet">
            <label> Contact details </label><br/>
            <input name="email" placeholder="email" type="text"
              onChange={(e) => this.updateNewRequest(e)}
              value={this.state.newRequest.email|| ((this.state.companyData.employees||[]).find(person => person.employee_id == this.state.newRequest.employee_id)||{}).email}
            />
            <input name="phone" placeholder="phone" type="text"
              onChange={(e) => this.updateNewRequest(e)}
              value={this.state.newRequest.phone|| ((this.state.companyData.employees||[]).find(person => person.employee_id == this.state.newRequest.employee_id)||{}).phone}
            />
          </div>

          <div className="form clientDet">
            <label> Client details </label><br/>
            <select name="client" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> client name </option>
              {this._renderClient()}
            </select>
            <select name="project" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> project </option>
              {this._renderProject()}
            </select>
          </div>

          <div className="form paymentDet">
            <label> Approval and payment details </label><br/>
            <select name="approver" onChange={(e)=> this.updateNewRequest(e)}>
              <option selected disabled>approver</option>
              {this._renderApprovers(approvers)}
            </select>
            <select name="isBillable" onChange={(e)=> this.updateNewRequest(e)}>
              <option disabled> is billable to customer?</option>
              <option value={true}> Yes </option>
              <option value={false}> No </option>
            </select>
            <select name="site" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> site </option>
              {this._renderSite()}
            </select>
          </div>

          <p>Hello {this.state.newRequest.name}, please provide more details regarding your travel:</p>
          <textarea className="form-description" rows="10" cols="100" name="description" placeholder="" type="edit" onChange={(e) => this.updateNewRequest(e)}/><br/>

          <input type="submit" value="submit a new request"/>

        </form>
      </div>

    )
  }
}
