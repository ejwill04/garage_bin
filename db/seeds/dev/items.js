exports.seed = function(knex, Promise) {
  return knex('items').del()
  .then(() => {
    return Promise.all([
      knex('items').insert({
        name: "Golf clubs",
        reason: "because",
        cleanliness: 'Dusty'
      })
    ]);
  });
};
