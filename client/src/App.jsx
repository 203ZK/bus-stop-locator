import React, { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		fetch("http://localhost:3000").then((response) => {
            return response.json();
		}).then((response) => {
            setData(response.stops);
        });
	}, []);  

	return (
        <div>
            {(typeof data === "undefined") ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>Bus Stops:</h1>
                    <ul>
                        {data.map((stop, idx) => (
                            <li key={idx}>{stop.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
	);
}

export default App;