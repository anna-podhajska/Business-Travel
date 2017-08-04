
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

function getRequests(connection) {
  return connection('travelRequests')
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
}
//because it will return arr with 1 obj

module.exports = {
  getApprovers,
  getClients,
  getEmployees,
  getProjects,
  getSites,
  getRequests,
  getRequest
}
