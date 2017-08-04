
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('employees', table => {
    table.increments('employee_id')
    table.string('name')
    table.string('emplNo')
    table.string('position')
    table.string('site')
    table.string('division')
    table.string('phone')
    table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employees')
};
