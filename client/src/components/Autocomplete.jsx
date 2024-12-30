import { useState } from "react";
import Autosuggest from "react-autosuggest";

const fetchOptions = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

const stationsArray = await fetch("http://localhost:3000/", fetchOptions).then((response) => response.json()).then((data) => data.stations);
const stations = stationsArray.map((station) => station.station_name);
console.log(stations);

const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 
           ? []
           : stations.filter((station) => station.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = (suggestion) => suggestion;

const renderSuggestion = (suggestion) => (
    <div>{suggestion}</div>
);

function Autocomplete() {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const onChange = (e, { newValue }) => {
        setValue(newValue);
    };

    const onSuggestionsFetchRequested = ({ value} ) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: "Search an MRT station...",
        value,
        onChange: onChange
    };

    return (
        <Autosuggest 
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    );
}

export default Autocomplete;