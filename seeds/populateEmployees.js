
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          emplNo : "E001",
          name : "Tom Cat",
          position : "Developer",
          site_id : "Lisbon",
          division : "TV Technology",
          phone : "+351234440009",
          email : "Tom.Cat@company.com"
        },
        {
          emplNo : "E002",
          name : "Monica Bear",
          position : "Automation tester",
          site_id : "Lisbon",
          division : "Connected Health",
          phone : "+351242557809",
          email : "Monica.Bear@company.com"
        },
        {
          emplNo : "E003",
          name : "Alan Blake",
          position : "Product owner",
          site_id : "Prague",
          division : "TV Technology One",
          phone : "+420343555669",
          email : "Tom.Cat@company.com"
        },
        {
          emplNo : "E004",
          name : "Monica Belucci",
          position : "UE specialist",
          site_id : "Prague",
          division : "Consumer One",
          phone : "+420340876999",
          email : "Monica.Belucci@company.com"
        },
        {
          emplNo : "E005",
          name : "Ian Harris",
          position : "Sales manager",
          site_id : "Wellington",
          division : "TVT Connected",
          phone : "+64335667889",
          email : "Ian.Harris@company.com"
        },
        {
          emplNo : "E006",
          name : "Alson Saunders",
          position : "Project manager",
          site_id : "Wellington",
          division : "Silicon",
          phone : "+64335667776",
          email : "Alison.Saunders@company.com"
        },
        {
          emplNo : "E000",
          name : "Harrison",
          position : "Senior Developer",
          site_id : "Ground Zero",
          division : "Emoji with sunglasses",
          phone : "+0279344793",
          email : "Symeshjb@gmail.com"
        }
      ]);
    });
};
