
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
        {language: 'Swahili',country: 'Kenya', product: 'maize'},
        {language: 'English',country: 'Rwanda', product: 'oil'},
        {language: 'English',country: 'Uganda', product: 'rice'}
      ]);
    });
};
