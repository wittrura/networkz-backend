
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', table => {
    table.increments();
    table.string("first_name").notNullable().defaultTo('');
    table.string("last_name").notNullable().defaultTo('');
    table.string("phone_number").notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
