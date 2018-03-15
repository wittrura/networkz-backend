
exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', table => {
    table.increments();
    table.string("name").notNullable().defaultTo('');
    table.string("industry").notNullable().defaultTo('');
    table.text("notes").notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
