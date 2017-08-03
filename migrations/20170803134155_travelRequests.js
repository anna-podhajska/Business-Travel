
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('travelRequests', table => {
    table.increments('request_id')
    table.integer('employee_id')
    table.integer('client_id')
    table.integer('proj_code')
    table.integer('approver_id')
    table.boolean('is_billable')
    table.integer('site_id')
    table.string('division')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('travelRequests')
};
