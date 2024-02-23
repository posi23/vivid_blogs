**Vivid Theory Coding Challenge - Blog**

This is a application that allows users to search for, view, create and delete blogs.


This project was done using:

- TypeScript, NodeJS and ExpressJS (Server-side)
- TypeScript and ReactJS (Client-side)
- PostgreSQL (Database)
- Sequelize (ORM)
- Rest API (Query Language)


You can either use both my .env files (in the root of the project, and the another in the client directory) for this or you can create a new one.

For the .env file that will be in the root of the application, make sure to have:
- SERVER_PORT (the port where the backend server will be started on)
- DB_USER (username to the database)
- DB_PASSWORD (password to the database)
- DB_NAME_DEV (name to the database being used for development environment)
- DB_NAME_PROD (name to the database being used for production environment)
- DB_HOST
- DB_DIALECT
- DB_PORT

For the .env file that will be in the client directory, make sure to have:
- REACT_APP_API_SERVER_PORT (this will be the port to the backend/server where we will be making API calls to, from the client side)


**How to run**
After cloning project, run the following on the terminal
- cd server
- npm i
- npm run db-init-dev (if using production environment use 'npm run db-init-prod')
- npm run start
- cd ../client
- npm run start


To undo seeding and migration
- cd server (if not already in the server directory)
- npm run db-undo-dev (If dev environment used)
- npm run db-undo-prod (If Prod environment used)


Feel free to check the package.json file in the server directory for more Sequelize commands you might find useful

**Author**: POSI ADEYEMI