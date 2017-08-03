
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {client_id: 1, name: 'Deloitte'},
        {client_id: 2, name: 'S3 Group'},
        {client_id: 3, name: 'Merck Serono'}
        {client_id: 4, name: 'Accenture'}
        {client_id: 5, name: 'IBM'}
        {client_id: 6, name: 'Philips'}
        {client_id: 7, name: 'Cohlear'}
        {client_id: 8, name: 'Advance Bionics'}
        {client_id: 9, name: 'EDA'}
      ]);
    });
};
