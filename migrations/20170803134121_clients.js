
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('clients', table => {
    table.increments('client_id')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clients')
};
