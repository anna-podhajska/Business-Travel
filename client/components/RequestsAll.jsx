import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function (props) {
  console.log(props.requests);
    // console.log(props);
    return (
      <ul>
        {props.requests.map((request) => <Link to={"/requestView/" +request.request_id}> <li className="RequestsAll-request"> {request.name}</li></Link>)}
      </ul>
    )

}
