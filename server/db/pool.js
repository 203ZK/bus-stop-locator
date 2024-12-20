const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres",
    database: "mrt_stops",
    password: "stama92(6)POSTGRESQL",
    port: 5432
});