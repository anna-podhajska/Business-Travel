import React from 'react'
import {Link} from 'react-router-dom'

export default function (props) {
  return (
    <div className="nav-container">
      <div className="nav-sideBar">
        <Link to="/" className="nav-home-link"><h1>Business travel platform</h1></Link>
          <ul>
            <li><Link className="nav-button" to={props.pathHome}>home</Link></li>
            <li><Link className="nav-button" to={props.pathSubmit}> submit a new request</Link></li>
            <li><Link className="nav-button" to={props.pathAllRequests}> view all requests</Link></li>
          </ul>
      </div>

    </div>
  )
}
