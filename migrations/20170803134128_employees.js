
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('employees', table => {
    table.increments('employee_id')
    table.string('emplNo')
    table.string('positions')
    table.string('site')
    table.string('division')
    table.string('phone')
    table.string('email')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employee')
};
