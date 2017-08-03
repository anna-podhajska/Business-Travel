
function getApprovers(connection) {
  return connection('approvers')
}

function getClients(connection) {
  return connection('clients')
}

function getEmployees(connection) {
  return connection('employees')
}

function getProjects(connection) {
  return connection('projects')
}

function getSites(connection) {
  return connection('sites')
}

module.exports = {
  getApprovers,
  getClients,
  getEmployees,
  getProjects,
  getSites
}
