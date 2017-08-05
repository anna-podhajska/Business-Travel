
function getApprovers(connection) {
  return connection('approvers').orderBy("name", "asc")
}

function getClients(connection) {
  return connection('clients').orderBy("name", "asc")
}

function getEmployees(connection) {
  return connection('employees').orderBy("emplNo", "asc")
}

function getProjects(connection) {
  return connection('projects').orderBy("proj_name", "asc")
}

function getSites(connection) {
  return connection('sites').orderBy("name", "asc")
}

function getRequests(connection) {
  return connection('travelRequests').orderBy("outbound_date", "desc")
}

function getRequest(connection, id) {
  return connection("travelRequests")
  .join("clients", "travelRequests.client_id", "=", "clients.client_id")
  .join("approvers", "travelRequests.approver_id", "=", "approvers.approver_id")
  .join("sites", "travelRequests.site_id", "=", "sites.site_id")
  .join("employees", "travelRequests.emplNo", "=", "employees.emplNo")
  .join("projects", "travelRequests.proj_code", "=", "projects.proj_code")
  .select(
    "request_id",
    "employees.*",
    "travelRequests.proj_code as proj_code",
    "approvers.name",
    "is_billable",
    "sites.name as site_name",
    "description",
    "proj_name",
    "topic",
    "created_at",
    "outbound_date",
    "approval_status"
    )
  .where("travelRequests.request_id", id)
  .first()
} //because it will return arr with 1 obj


function createNewRequest(connection, requestData) {
  return connection ("travelRequests")
  .insert(requestData)
}

module.exports = {
  getApprovers,
  getClients,
  getEmployees,
  getProjects,
  getSites,
  getRequests,
  getRequest,
  createNewRequest
}
