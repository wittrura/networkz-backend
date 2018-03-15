
exports.up = function(knex, Promise) {
  return knex.schema.createTable("interactions", table => {
    table.increments();
    table.integer("contact_id")
      .notNullable()
      .references("id")
      .inTable("contacts")
      .onDelete("CASCADE");
    table.text("notes").notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("interactions");
};
