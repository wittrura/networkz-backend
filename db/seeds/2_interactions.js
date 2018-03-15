
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('interactions').insert([
        {contact_id: 1, notes: "working on new cloud project"},
        {contact_id: 2, notes: "mentioned brewing his own beer"},
        {contact_id: 3, notes: "good chat, may have openings in the next month"},
        {contact_id: 4, notes: "father wasn't feeling well"},
        {contact_id: 1, notes: "mentioned a blog post about bitcoin"},
        {contact_id: 2, notes: "met up at Weezer concert"}
      ]);
    });
};
