import knex from 'knex';
import knexConfig from '../config/database.js';

const knexConnect = knex(knexConfig);

export default knexConnect;