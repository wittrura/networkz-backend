
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: "WP Engine", industry: "software", notes: "make things in word press"},
        {name: "OwnLocal", industry: "software", notes: "small business"},
        {name: "TrendKite", industry: "software", notes: "PR analytics"},
        {name: "Atlassian", industry: "software", notes: "business tools"}
      ]);
    });
};
