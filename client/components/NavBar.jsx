import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'



export default function (props) {
  return (
    <div className="container">
      <div className="sideBar">

        <Link to="/" className="home-link"><h1>Company business travel platform</h1></Link>
          <ul>
            <li><Link className="nav-button" to="/">home</Link></li>
            <li><Link className="nav-button" to="/submit"> submit a new request</Link></li>
            <li><Link className="nav-button" to="#"> view all requests</Link></li>
          </ul>
      </div>

    </div>
  )
}
