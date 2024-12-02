import React, { useState, useEffect } from "react";
import axios from "axios";
import AutocompleteInput from "./AutoComplete";

const FetchapiStates = ({ onSelectState }) => {
    const [states, setState] = useState([]);
    const [filterStates, setFilterStates] = useState([]);
    const [selectState, setSelectState] = useState('');

    const getStates = async () => {
        const response = await axios.get('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/refs/heads/master/data/geojson/us-states.json');
        const stateName = response.data.features.map((feature) => feature.properties.name);

        setState(stateName);
        setFilterStates(stateName);
    };

    useEffect(() => {
        getStates();
    }, []);

    // Handle user input change and filter logic
    const handleInputChange = (event) => {
        const stateInput = event.target.value;
        setSelectState(stateInput);

        if (stateInput) {
            const filtered = states.filter(state => state.toLowerCase().includes(stateInput.toLowerCase()));
            setFilterStates(filtered); // update filtered state
        } else {
            setFilterStates(states); // otherwise show all states
        }
    };

    // handle state selection
    const handleSelectState = (state) => {
        setSelectState(state); // set the input value to the selected state
        setFilterStates([]); // clear the list to hide suggestions
        onSelectState(state); // pass the select state back to the parent
    }

    return (
        <AutocompleteInput 
        value = {selectState}
        onChange = {handleInputChange}
        filteredItem = {filterStates}
        onSelectItem = {handleSelectState} />
    );
};

export default FetchapiStates;