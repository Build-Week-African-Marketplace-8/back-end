exports.seed = function(knex) {
  return knex('users')
    // .truncate()
    .then(function () {
      return knex('users').insert([
        {username:"shannon", password:"$2b$10$13/VWNhhwFQrYXhUvH4A7OKPnYwPBHPF77H2yCrhCjE0kQ910PFF2", user_id: 1},
      ]);
    });
};