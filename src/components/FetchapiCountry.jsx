import React, { useState, useEffect } from "react";
import axios from "axios";
import AutocompleteInput from "./AutoComplete";

const FetchapiCountry = ({ onSelectCountry }) => {
    const [countries, setCountries] = useState([]);
    const [filterCountries, setFilterCountries] = useState([]);
    const [selectCountry, setSelectCountry] = useState('');

    const getCountries = async () => {
        const response = await axios.get('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/refs/heads/master/data/geojson/countries.geojson');
        const countryName = response.data.features.map((feature) => feature.properties.name);

        setCountries(countryName);
        setFilterCountries(countryName);
    };

    useEffect(() => {
        getCountries();
    }, []);

    // Handle user input change and filter logic
    const handleInputChange = (event) => {
        const countryInput = event.target.value;
        setSelectCountry(countryInput);

        if (countryInput) {
            const filtered = countries.filter(country => country.toLowerCase().includes(countryInput.toLowerCase()));
            setFilterCountries(filtered); // update filtered countries
        } else {
            setFilterCountries(countries); // otherwise show all countries
        }
    };

    // handle country selection
    const handleSelectCountry = (country) => {
        setSelectCountry(country); // set the input value to the selected country
        setFilterCountries([]); // clear the list to hide suggestions
        onSelectCountry(country); // pass the select country back to the parent
    }

    return (
        <AutocompleteInput 
        value = {selectCountry}
        onChange = {handleInputChange}
        filteredItem = {filterCountries}
        onSelectItem = {handleSelectCountry} />
    );
};

export default FetchapiCountry;