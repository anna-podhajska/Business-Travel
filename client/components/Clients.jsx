import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'


export default function CliList (props) {
  return (
    <div className="CliList">
      {props.clients.map((cli, i) => {
        return (
          <div className="cat">
            <h1>HELLOOO {cli.name}</h1>
            <h1>{cli.id}</h1>
            <img src={cat.image} />
          </div>
        )
      })}
    </div>
  )
}
