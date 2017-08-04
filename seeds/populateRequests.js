
exports.seed = function(knex, Promise) {
  return knex('travelRequests').del()
    .then(function () {
      // Inserts seed entries
      return knex('travelRequests').insert([
        {request_id: 1, emplNo: 'E001', client_id: 1, proj_code: 11200, approver_id: 1, is_billable: true, site_id: 1, division: "Dublin", description: "Hello I am ..."},
        {request_id: 2, emplNo: 'E002', client_id: 2, proj_code: 11201, approver_id: 2, is_billable: true, site_id: 2, division: "Dublin", description: "Hello I am ..."},
        {request_id: 3, emplNo: 'E003', client_id: 3, proj_code: 11202, approver_id: 3, is_billable: true, site_id: 3, division: "Dublin", description: "Hello I am ..."},
        {request_id: 4, emplNo: 'E000', client_id: 4, proj_code: 11203, approver_id: 4, is_billable: true, site_id: 4, division: "Dublin", description: "Hello I am ..."},
      ]);
    });
};
