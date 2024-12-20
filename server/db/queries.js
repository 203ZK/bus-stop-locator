const pool = require("./pool");

async function getAllStations() {
    const { rows } = await pool.query("SELECT * FROM mrt_stops");
    return rows;
}

async function getByName(name) {
    const { rows } = await pool.query("SELECT * FROM mrt_stops WHERE station_name = $1", [name]);
    return rows;
}

module.exports = {
    getAllStations,
    getByName
};