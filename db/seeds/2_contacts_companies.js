
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts_companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts_companies').insert([
        {contact_id: 1, company_id: 4},
        {contact_id: 2, company_id: 1},
        {contact_id: 3, company_id: 2},
        {contact_id: 4, company_id: 3},
        {contact_id: 5, company_id: 4}
      ]);
    });
};
