exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('item', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('reason');
            table.integer('cleanliness');
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('item')
    ])
};
