
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts_companies', table => {
    table.increments();
    table.integer("contact_id")
      .notNullable()
      .references("id")
      .inTable("contacts")
      .onDelete("CASCADE");
    table.integer("company_id")
      .notNullable()
      .references("id")
      .inTable("companies")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts_companies');
};
