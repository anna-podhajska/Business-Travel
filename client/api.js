import request from 'superagent'

var requestUrl = '/v1'

export function getApprovers(callback) {
  request
    .get(requestUrl + '/approvers')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}
export function getClients(callback) {
  request
    .get(requestUrl + '/clients')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}
export function getEmployees(callback) {
  request
    .get(requestUrl + '/employees')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}
export function getProjects(callback) {
  request
    .get(requestUrl + '/projects')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body, 'projects')
    })
}
export function getSites(callback) {
  request
    .get(requestUrl + '/sites')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body, 'sites')
    })
}

export function getRequests(callback) {
  request
    .get(requestUrl + '/travelRequests')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function getRequest(requestId, callback) {
  request
    .get(requestUrl + '/travelRequest/'+requestId)
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

// -------

export function submitNewRequest(requestData, callback){
  request 
}
