**Vivid Theory Coding Challenge - Blog**

This is a application that allows users to search for, view, create and delete blogs.


This project was done using:

- TypeScript, NodeJS and ExpressJS (Server-side)
- TypeScript and ReactJS (Client-side)
- PostgreSQL (Database)
- Sequelize (ORM)
- Rest API (Query Language)


**How to run**
After cloning project, run the following on the terminal
- cd server
- npm i


You can either use my .env file in the server app for this or you can use yours for your own database

For development environment for the database
- npm run db-init-dev


For production environment for the database (I would be using this if I was actually pushing this to production)
- npm run db-init-prod


Starting the server
- npm run start
- cd ../client
- npm run start


To undo seeding and migration
- cd server (if not already in the server directory)
- npm run db-undo-dev (If dev environment used)
- npm run db-undo-prod(If Prod environment used)


Feel free to check the package.json file in the server directory for more Sequelize commands you might find useful

**Author**: POSI ADEYEMI