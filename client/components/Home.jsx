import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'



export default function (props) {
  return (
    <div className="container">
      <Link to="/" className="home-link"><h1>Internal company business travel platform</h1></Link>
      <Link to="/submit"> submit a new request</Link>

    </div>
  )
}
