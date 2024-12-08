const express = require("express");
const app = express();
const cors = require("cors");

const data = {
    stops: [
        { name: "Opp Tanglin Halt", code: 43013 },
        { name: "Blk 709", code: 39483 },
        { name: "Newton Stn Exit A", code: 92432 }
    ]
};

app.use(cors());

app.get("/", (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});