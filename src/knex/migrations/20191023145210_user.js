
exports.up = function(knex) {
    return knex.schema.createTable('User', (table) => {
        table.string('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('password').notNullable();
        table.string('emailId').notNullable().unique();
        table.string('phoneNo').notNullable().unique();
        table.timestamps(false, true);
    })
};

exports.down = exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
  };
  