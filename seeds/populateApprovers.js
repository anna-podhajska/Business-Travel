
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('approvers').del()
    .then(function () {
      // Inserts seed entries
      return knex('approvers').insert([
        {approver_id: 1, name: 'Derek Dwyer'},
        {approver_id: 2, name: `John O'brian`},
        {approver_id: 3, name: 'John Mulcahy'},
        {approver_id: 4, name: 'Goretti McCormack'},
        {approver_id: 5, name: 'Nina Bosmack'},
        {approver_id: 6, name: `Jim O'Donoghue`},
        {approver_id: 7, name: 'Romain Guenard'},
      ]);
    });
};
