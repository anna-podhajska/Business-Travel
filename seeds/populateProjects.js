
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          proj_name: "Double Delta",
          proj_code: 11200
        },
        {
          proj_name: "Radio Simulator",
          proj_code: 11201
        },
        {
          proj_name: "Jet Ski",
          proj_code: 11202
        },
        {
          proj_name: "Pacemaker",
          proj_code: 11203
        },
        {
          proj_name: "Rocket Launcher",
          proj_code: 11204
        },
        {
          proj_name: "Apollo",
          proj_code: 11205
        },
        {
          proj_name:  "Sigma",
          proj_code: 11206
        }
      ]);
    });
};
