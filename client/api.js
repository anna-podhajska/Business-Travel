import request from 'superagent'

var requestUrl = '/v1'

//example of an api request function on client side

export function getSomething(callback) {
  request
    .get(requestUrl)
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function getApprovers(callback) {
  request
    .get(requestUrl + '/approvers')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body, 'approvers')
    })
}
export function getClients(callback) {
  request
    .get(requestUrl + '/clients')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body, 'clients')
    })
}
export function getEmployees(callback) {
  request
    .get(requestUrl + '/employees')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body, 'employees')
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
