import { useState } from "react";
import Autocomplete from "./Autocomplete";

function Search({ update }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = document.getElementsByClassName("react-autosuggest__input")[0].value;

        const serialisedQuery = JSON.stringify({ query: inputValue });

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
            <Autocomplete />
            <button type="submit" id="submit-btn">Search</button>
        </form>
    );
}

export default Search;