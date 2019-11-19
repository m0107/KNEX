
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'Engineer', user_id: 1},
        {id: 2, title: 'fokat', user_id: 2},
      ]);
    });
};
