// Purpose: Configuration for the database connection
import * as dotenv from 'dotenv';
import { Options } from 'sequelize';

dotenv.config({
  path: '${__dirname}/../../.env'
});

interface ConfigTs {
  development: Options;
  production: Options;
}

// module.exports = {
//   development: {
//     dialect: "postgres",
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//   },
// }

const config: ConfigTs = {
  development: {
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  },
  production: {
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  },
};

export default config;
module.exports = config;

// export const username = String(process.env.DB_USER);
// export const password = String(process.env.DB_PASSWORD)
// export const database = String(process.env.DB_NAME)
// export const host = String(process.env.DB_HOST)
// export const port = Number(process.env.DB_PORT)


// export default new Sequelize(
//   database,
//   username,
//   password,
//   {
//     dialect: "postgres",
//     host: host,
//     port: port,
//   }
// );

// "test": {
//   "username": "root",
//   "password": null,
//   "database": "database_test",
//   "host": "127.0.0.1",
//   "dialect": "mysql"
// },
// "production": {
//   "username": "root",
//   "password": null,
//   "database": "database_production",
//   "host": "127.0.0.1",
//   "dialect": "mysql"
// }

