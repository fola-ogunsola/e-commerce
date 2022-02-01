let config = require('./index');
let databaseUrl = config.DATABASE_URL;

  
const pgp = require("pg-promise")({});
const db = pgp(databaseUrl);

module.exports = db;