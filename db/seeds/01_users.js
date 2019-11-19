
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Mohit', email: 'mohit@gmail.com'},
        {id: 2, name: 'Yash', email: 'yash@gmail.com'},
      ]);
    });
};
