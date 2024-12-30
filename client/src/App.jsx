import React, { useState } from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Autocomplete from "./components/Autocomplete";

function App() {
	const [data, setData] = useState({});

    const handleResponse = (station) => {
        setData({stops: station});
    };

	return (
        <div className="main">
            <Search update={(station) => handleResponse(station)} />
            {(Object.keys(data).length === 0) ? (
                <div>Search an MRT station!</div>
            ) : (
                <>
                    {data.stops.map((stop, idx) => {
                        return (
                            <Card key={idx}
                                stationCode={stop.station_code} stationName={stop.station_name}
                                code={stop.bus_stop_code} name={stop.bus_stop_name}
                                services={stop.bus_services} directions={stop.directions}
                            />
                        );
                    })}
                </>
            )}
        </div>
	);
}

export default App;
