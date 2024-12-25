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
            .then((station) => update(station))
            .catch((error) => alert(error));
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input 
                type="text" id="query" name="query" 
                placeholder="Search by station name"
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button type="submit" id="submit-btn">Search</button>
        </form>
    );
}

export default Search;