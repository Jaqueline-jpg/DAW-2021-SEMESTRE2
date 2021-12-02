const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'jaqueline12@',
        database: 'dawdb',
        port: 333
    }
});

module.exports = knex;