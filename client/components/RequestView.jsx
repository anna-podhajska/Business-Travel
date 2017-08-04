import React from 'react'

// import {HashRouter as Router, Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'

export default function ({request}) {

    // console.log(request);
    return(
      <div className="RequestView-container">

        {request.name}  <br />
        {request.description}

      </div>

    )

}
