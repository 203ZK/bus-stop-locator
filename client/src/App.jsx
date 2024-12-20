import React, { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
    const [index, setIndex] = useState(0);
	const [data, setData] = useState({});

    const handleResponse = (station) => {
        setData(station);
        setIndex(1);
    };

	return (
        <div>
            {(typeof data === "undefined") ? (
                <p>Loading...</p>
            ) : (index === 0) ? (
                <Search update={(station) => handleResponse(station)}></Search>
            ) : (
                <p>{data.code}, {data.station_name}</p>
            )}
        </div>
	);
}

export default App;

/* <div>
    <h1>MRT Stations:</h1>
    <ul>
        {data.map((station, idx) => (
            <li key={idx}>{station.station_name}</li>
        ))}
    </ul>
</div> */