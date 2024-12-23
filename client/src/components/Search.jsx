import { useState } from "react";

function Search({ update }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const serialisedQuery = JSON.stringify({ query: query });

        const fetchOptions = {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: serialisedQuery
        };

        fetch("http://localhost:3000/", fetchOptions)
            .then((response) => response.json())
            .then((station) => update(station));
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className="query-div">
                <input 
                    type="text" id="query" name="query" 
                    placeholder="Search by station name"
                    onChange={(e) => setQuery(e.target.value)} 
                />
            </div>
            <div className="submit-div">
                <button type="submit" id="submit-btn">Search</button>
            </div>
        </form>
    );
}

export default Search;