import React, { useState } from "react";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
	const [data, setData] = useState({});

    const handleResponse = (station) => {
        setData(station);
    };

	return (
        <div className="main">
            <Search update={(station) => handleResponse(station)}></Search>
            {(Object.keys(data).length === 0) ? (
                <div>Search an MRT station!</div>
            ) : (
                <Card 
                    code={data.bus_stop_code}
                    name={data.bus_stop_name}
                    services={data.bus_services}
                    directions={data.directions}
                ></Card>
            )}
        </div>
	);
}

export default App;
