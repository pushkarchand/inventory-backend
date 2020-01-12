
exports.up = function(knex) {
    return knex.schema.createTable('Product', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('price').notNullable();
        table.string('category').notNullable();
        table.string('subCategory').notNullable();
        table.string('url').notNullable();
        table.string('description').notNullable();
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Product');
};
