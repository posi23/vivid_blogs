import { Sequelize } from "sequelize";
import config from ".";

const { username, password, database, host, port } = config.development;

const db = new Sequelize(
    database,
    username,
    password,
    {
        dialect: "postgres",
        host: host,
        port: port,
    }
);
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        process.exit();
    });

export default db;