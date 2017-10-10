const kx = require('knex')({
  client: 'pg',
  connection: {
    database: 'clucks_list'
  }
});

module.exports = kx;
