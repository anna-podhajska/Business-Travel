
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sites', table => {
    table.increments('site_id')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sites')
};
