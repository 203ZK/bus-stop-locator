const pool = require("./pool");

// Retrieves all MRT stations
async function getAllStations() {
    const { rows } = await pool.query("SELECT station_name FROM mrt_stations");
    return rows;
}

async function getByName(name) {
    const { rows } = await pool.query("SELECT * FROM mrt_stops WHERE station_name = $1", [name]);
    return rows;
}

// Retrieves all bus stops associated with a station
async function getBusStopDirections(station) {
    const { rows } = await pool.query(
        "SELECT b.bus_stop_code, b.bus_stop_name, b.bus_services, m.station_code, m.station_name, d.station_exit, d.directions FROM directions d JOIN bus_stops b ON b.bus_stop_code = d.bus_stop_code JOIN mrt_stations m ON m.station_code = d.station_code WHERE station_name = $1", [station]
    );
    return rows;
}

module.exports = {
    getAllStations,
    getByName,
    getBusStopDirections
};