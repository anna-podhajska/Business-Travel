
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('employee', table => {
    table.increments('emplNo')
    table.string('positions')
    table.string('site')
    table.string('division')
    table.number('phone')
    table.string('email')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employee')
};
