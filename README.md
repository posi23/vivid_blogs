**Vivid Theory Coding Challenge - Blog**

This is a application that allows users to search for, view, create and delete blogs.


This project was done using:

- TypeScript, NodeJS and ExpressJS (Server-side)
- TypeScript and ReactJS (Client-side)
- PostgreSQL (Database)
- Sequelize (ORM)
- Rest API (Query Language)


You can either use my .env file in the server app for this or you can use yours for your own database

Make sure to include this in your .env file
SERVER_PORT
DB_USER
DB_PASSWORD
DB_NAME_DEV
DB_NAME_PROD
DB_HOST
DB_DIALECT
DB_PORT


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