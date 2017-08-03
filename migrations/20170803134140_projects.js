
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('projects', table => {
    table.increments('proj_code')
    table.string('proj_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
