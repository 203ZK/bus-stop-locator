const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/queries");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

async function getStations(req, res) {
    const stations = await db.getAllStations();
    res.send({ stations });
}

async function getStationByName(res, name) {
    const station = await db.getByName(name);
    const details = station[0];
    console.log(details);
    res.send(details);
}

async function getDirections(res, name) {
    const station = await db.getBusStopDirections(name);

    if (station.length !== 0) {
        const details = station[0];
        res.send(details);
    } else {
        res.send({});
    }
}

app.get("/", getStations);
app.post("/", (req, res) => getDirections(res, req.body.query));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});