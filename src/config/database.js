import Knex from 'knex'

const knexConfig = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '010203',
    database: process.env.DB_NAME || 'financas'
  }
};

export default knexConfig;
