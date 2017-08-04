
exports.seed = function(knex, Promise) {
  return knex('travelRequests').del()
    .then(function () {
      // Inserts seed entries
      return knex('travelRequests').insert([
        {request_id: 1, emplNo: 'E001', client_id: 1, proj_code: 11200, approver_id: 1, is_billable: true, site_id: 1, division: "Dublin", topic: "Urgent - travel for tomorrow", description: "Hello I am travelling to the customer tomorrow, urgent meetup required by their team. The client agreed to add the cost to the bill", outbound_date: "21/08/2017", created_at: "2017-08-20 11:20:00.851-05", approval_status: "pending_approval"},

        {request_id: 2, emplNo: 'E002', client_id: 7, proj_code: 11201, approver_id: 2, is_billable: false, site_id: 2, division: "Dublin", topic: "Cohlear, Sydney", description: "Hi All, need to go to Cohlear site in SYD next week for 2 days. I already checked the flights cost with travel desk, it is approx 3000NZD incl hotel and transit. It is not billable to the client", outbound_date: "28/08/2017", created_at: "2017-08-20 13:20:00.851-05", approval_status: "approved"},

        {request_id: 3, emplNo: 'E003', client_id: 3, proj_code: 11202, approver_id: 3, is_billable: true, site_id: 3, division: "Dublin", topic: "Dubai, September", description: "Hi, need to estimate travel cost to Dubai on September 11-17. The usual location please.", outbound_date: "11/09/2017", created_at: "2017-08-19 11:20:00.851-05", approval_status: "pending_approval"},

        {request_id: 4, emplNo: 'E000', client_id: 4, proj_code: 11203, approver_id: 4, is_billable: true, site_id: 4, division: "Dublin", topic: "Urgent, Auckland tomorrow", description: "Can you re-schedule my flights to Auckland from the next week to tomorrow? We have a serious issue with the production system that requires my presence. Thanks", outbound_date: "28/08/2017", created_at: "2017-08-19 11:20:00.851-05", approval_status: "declined"},
      ]);
    });
};
