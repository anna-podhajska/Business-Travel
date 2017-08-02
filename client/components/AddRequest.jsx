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
    this.setState([e.target.name]: e.target.value)
    console.log([e.target]);
  }

  _renderEmplNo(employees) {
    return (employees.map(function(employee, i) {
        return (
         <option key={i}> {employee.emplNo}</option>
        )
    }))
  }
  _renderEmplDivision(employees) {
    return (employees.map((empl, i)=> <option key={i}> {empl.division}</option>))
  }
  _renderSite(sites) {
    return(sites.map(function(site, i) {
      return <option key={i}> {site} </option>
    }))
  }
  _renderClient(clients) {
    return(clients.map((client, i) => <option key={i}> {client}</option>
    ))
  }
  _renderProject(projects) {
    return(projects.map((project, i) => <option key={i}> {project.proj_name} {project.proj_code}</option>
    ))
  }
  _renderApprovers(approvers) {
    return(approvers.map((approver, i) => <option key={i}> {approver}</option>
    ))
  }

  render () {
    return (
      <div className="content">
        <form onSubmit={e => this.submitRequest(e)}>

          <div className="form personalDet">
            <label> Personal details </label><br/>
            <input name="name" placeholder="name as in the passport" type="text" onChange={(e) => this.updateNewRequest(e)}/>
            <select name="emplNo" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> employee number </option>
              {this._renderEmplNo(employees)}
            </select>
            <select name="division" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> division </option>
              {this._renderEmplDivision(employees)}
            </select>
          </div>

          <div className="form contactDet">
            <label> Contact details </label><br/>
            <input name="email" placeholder="email" type="text" onChange={(e) => this.updateNewRequest(e)}/>
            <input name="phone" placeholder="phone" type="text" onChange={(e) => this.updateNewRequest(e)}/>
          </div>

          <div className="form clientDet">
            <label> Client details </label><br/>
            <select name="client" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> client name </option>
              {this._renderClient(clients)}
            </select>
            <select name="project" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> project </option>
              {this._renderProject(projects)}
            </select>
          </div>

          <div className="form paymentDet">
            <label> Approval and payment details </label><br/>
            <select name="approver" onChange={(e)=> this.updateNewRequest(e)}>
              <option selected disabled>approver</option>
              {this._renderApprovers(approvers)}
            </select>
            <select name="isBillable" onChange={(e)=> this.updateNewRequest(e)}>
              <option selected disabled> is billable to customer?</option>
              <option> yes </option>
              <option> no </option>
            </select>
            <select name="site" onChange={(e) => this.updateNewRequest(e)}>
              <option selected disabled> site </option>
              {this._renderSite(sites)}
            </select>
          </div>

          <p>Hello {this.state.NewRequest.name}, please provide more details regarding your travel:</p>
          <textarea className="form-description" rows="10" cols="100" name="description" placeholder="" type="edit" onChange={(e) => this.updateNewRequest(e)}/><br/>

          <input type="submit" value="submit a new request"/>

        </form>
      </div>

    )
  }
}
