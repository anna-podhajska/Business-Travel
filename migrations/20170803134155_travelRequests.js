
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('travelRequests', table => {
    table.increments('request_id')
    table.string('emplNo')
    table.integer('site_id')
    table.string('division')
    table.integer('client_id')
    table.integer('proj_code')
    table.integer('approver_id')
    table.boolean('is_billable')
    table.string('topic')
    table.text('description')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.date('outbound_date')
    table.string("approval_status").defaultTo("pending_approval")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('travelRequests')
};
