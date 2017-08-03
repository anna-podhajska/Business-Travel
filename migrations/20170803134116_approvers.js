
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('approvers', table => {
    table.increments('approver_id')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('approvers')
};
