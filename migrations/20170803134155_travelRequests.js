
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('travelRequests', table => {
    table.increments('request_id')
    table.integer('emplNo')
    table.integer('client_id')
    table.integer('project_id')
    table.integer('approver_id')
    table.boolean('is_billable')
    table.integer('site_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('travelRequests')
};
