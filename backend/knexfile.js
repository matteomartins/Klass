// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'klass'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'mysql',
    connection: {
      host : 'ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user : 'xcabqo1c27s1ls24',
      password : 'xecj74txwyjj0yu0',
      database : 'tqki2jazaro5qzff'
    },
    pool: { 
      min: 0, 
      max: 7 
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
