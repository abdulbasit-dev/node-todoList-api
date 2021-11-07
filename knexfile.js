// Update with your config settings.

module.exports = {
  development: {
    //it has to be here not in the .env file
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port:process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database:process.env.DB_DATABASE,
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      directory: './database/migrations'
    }
  }
};
