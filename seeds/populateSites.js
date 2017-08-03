
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sites').del()
    .then(function () {
      // Inserts seed entries
      return knex('sites').insert([
        {site_id: 1, name: 'Wellington'},
        {site_id: 2, name: 'Dublin'},
        {site_id: 3, name: 'Lisbon'},
        {site_id: 4, name: 'Prague'},
        {site_id: 5, name: 'San Jose'},
        {site_id: 6, name: 'Philadelphia'},
        {site_id: 7, name: 'Wroclaw'}
      ]);
    });
};
