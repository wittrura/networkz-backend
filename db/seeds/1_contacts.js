
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {first_name: 'David', last_name: "Bondy", phone_number: "5551234567"},
        {first_name: 'Matt', last_name: "McNamara", phone_number: "5554401915"},
        {first_name: 'Dan', last_name: "Degreef", phone_number: "5555676311"},
        {first_name: 'Mark', last_name: "Groener", phone_number: "5555676374"},
        {first_name: 'Russ', last_name: "Pierce", phone_number: "5555676666"},
      ]);
    });
};
