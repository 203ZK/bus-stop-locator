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
        <>
            <div className="logo">where's my bus stop?</div>
            <div className="main">
                <Search update={(station) => handleResponse(station)} />
                {(Object.keys(data).length === 0) ? (
                    <div className="empty">Search an MRT station to display the nearby bus stops!</div>
                ) : (Object.keys(data.stops).length === 0) ? (
                    <div className="empty">Oops! Looks like there are no bus stops associated with this MRT station :(</div>
                ) : (
                    <>
                        {data.stops.map((stop, idx) => {
                            return (
                                <Card key={idx}
                                    stationCode={stop.station_code} stationName={stop.station_name}
                                    exit={stop.station_exit} code={stop.bus_stop_code} name={stop.bus_stop_name}
                                    services={stop.bus_services} directions={stop.directions}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </>
	);
}

export default App;
