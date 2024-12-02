import Landing from "../components/Landing";
import Features from "../components/Features";

import '../components/Landing.css'
import '../components/Features.css'

import { useEffect, useCallback } from "react";
import axios from 'axios';

const Home = ({dogs, setDogs}) => {    
    const fetchDogs = useCallback(async () => {
        const apiUrl = 'https://api.rescuegroups.org/v5/public/orgs/2802/animals/search/available?limit=250';

        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `mR4p0XQv`,
            },
        });

        // Updating state with the fetched data
        setDogs(response.data.data);
        
    }, [setDogs]);

    // Fetch dogs when the component mounts
    useEffect(() => {
        fetchDogs();
    }, [fetchDogs]);

    return (
        <>
            <Landing />
            <Features featuredDogData={dogs} />
        </>
    );
}

export default Home;