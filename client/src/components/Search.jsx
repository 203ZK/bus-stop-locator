import { useState } from "react";

function Search({ update }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const serialisedQuery = JSON.stringify({ query: query });
        setQuery("");

        const fetchOptions = {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: serialisedQuery
        };

        var data = null;

        fetch("http://localhost:3000/", fetchOptions)
            .then((response) => response.json())
            .then((station) => update(station));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label forhtml="query"></label>
                <input 
                    type="text" 
                    id="query" 
                    name="query" 
                    placeholder="Search by station name"
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default Search;