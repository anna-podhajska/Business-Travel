import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function (props) {

    console.log(props);
    return (
      <ul>
        <Link to="/requestView"> {props.requests.map((request) => <li className="RequestsAll-request"> {request.name}</li>)} </Link>
      </ul>
    )

}
