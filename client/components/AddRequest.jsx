import React from 'react'
import employees from '../../data/employees.js'
import sites from '../../data/sites.js'
import clients from '../../data/clients.js'
import projects from '../../data/projects.js'
import approvers from '../../data/approvers.js'


export default class AddRequest extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      NewRequest: {}
    }
    this.submitRequest = this.submitRequest.bind(this)
    this.updateNewRequest = this.updateNewRequest.bind(this)
  }

  updateNewRequest(e) {
    let newRequest = this.state.NewRequest
    newRequest[e.target.name] = e.target.value
    this.setState({NewRequest: newRequest})
  }

  submitRequest(e) {
    e.preventDefault()
  }

  renderEmplNo(employees) {
    return (employees.map(function(employee, i) {
        return (
         <option key={i}> {employee.emplNo}</option>
        )
    }))
  }
  renderEmplDivision(employees) {
    return (employees.map((empl, i)=> <option key={i}> {empl.division}</option>))
  }
  renderSite(sites) {
    return(sites.map(function(site, i) {
      return <option key={i}> {site} </option>
    }))
  }
  renderClient(clients) {
    return(clients.map((client, i) => <option key={i}> {client}</option>
    ))
  }
  renderProject(projects) {
    return(projects.map((project, i) => <option key={i}> {project.proj_name} {project.proj_code}</option>
    ))
  }
  renderApprovers(approvers) {
    return(approvers.map((approver, i) => <option key={i}> {approver}</option>
    ))
  }

  render () {
    return (
      <div className="content">
        <form onSubmit={this.submitRequest}>

          <div className="form personalDet">
            <label> Personal details </label><br/>
            <input name="name" placeholder="name as in the passport" type="text" onChange={(e) => this.updateNewRequest(e)}/>
            <select name="emplNo" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> employee number </option>
              {this.renderEmplNo(employees)}
            </select>
            <select name="division" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> division </option>
              {this.renderEmplDivision(employees)}
            </select>
          </div>

          <div className="form contactDet">
            <label> Contact details </label><br/>
            <select name="site" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> site </option>
              {this.renderSite(sites)}
            </select>
            <input name="email" placeholder="email" type="text" onChange={(e) => this.updateNewRequest(e)}/>
            <input name="phone" placeholder="phone" type="text" onChange={(e) => this.updateNewRequest(e)}/>
          </div>

          <div className="form clientDet">
            <label> Client details </label><br/>
            <select name="client" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> client name </option>
              {this.renderClient(clients)}
            </select>
            <select name="project" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> project </option>
              {this.renderProject(projects)}
            </select>
          </div>

          <div className="form paymentDet">
            <label> Approval and payment details </label><br/>
            <select name="approver" onChange={(e)=> this.updateNewRequest(e)}>
              <option selected disabled>approver</option>
              {this.renderApprovers(approvers)}
            </select>
            <select name="isBillable" onChange={(e)=> this.updateNewRequest(e)}>
              <option selected disabled> is billable to customer?</option>
              <option> yes </option>
              <option> no </option>
            </select>
          </div>

          <p>Hello {this.state.NewRequest.name}, please provide more details regarding your travel:</p>
          <textarea className="form-description" rows="10" cols="100" name="description" placeholder="" type="edit" onChange={(e) => this.updateNewRequest(e)}/>

          <br/><input type="submit"/>

        </form>
      </div>

    )
  }
}
