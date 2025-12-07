// https://test1-api.rescuegroups.org/v5/public/docs

import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';

import DogsList from './DogsList';

const DogsApi = ({ dogs, setDogs }) => {
    // State to store loading status
    const [loading, setLoading] = useState(true);
    const [sexFilter, setSexFilter] = useState('all');
    const [ageSort, setAgeSort] = useState('young_old');

    const mountRef = useRef(true);

    const fetchDogs = useCallback(async () => {
        const apiUrl = 'https://api.rescuegroups.org/v5/public/orgs/2802/animals/search/available';

        const response = await axios.post(apiUrl, {
            include: ["pictures"],
            limit: 250
        },
            {
                headers: {
                    Authorization: `mR4p0XQv`,
                },
            }

        );

        // Updating state with the fetched data
        setDogs(response.data.data);
        setLoading(false);
    }, [setDogs]);

    // Fetch dogs when the component mounts
    useEffect(() => {
        if (dogs && dogs.length > 0) {
            setLoading(false);
            return;
        }
        fetchDogs();
        return () => {
            mountRef.current = false;
        }
    }, [fetchDogs, dogs, setDogs]);

    // If loading, show a loading message
    if (loading) {
        return <div className='dogs__list-item-loading'>Loading...</div>;
    };

    // Filter logic
    const filterValue = dogs.filter(dog => {
        if (sexFilter === 'all') {
            return true;
        }
        return dog.attributes.sex && dog.attributes.sex.toLowerCase() === sexFilter.toLowerCase();
    });

    // Filter update
    const onFilterValueChange = (event) => {
        setSexFilter(event.target.value);
    };

    // Sort logic
    const sortingByAge = filterValue.sort((a, b) => {
        const ageA = a.attributes.birthDate ? new Date(a.attributes.birthDate) : new Date('1900-01-01T00:00:00Z');
        const ageB = b.attributes.birthDate ? new Date(b.attributes.birthDate) : new Date('1900-01-01T00:00:00Z');

        return ageSort === 'young_old' ? ageB - ageA : ageA - ageB;
    });

    // Sort update
    const onSortValueChange = (event) => {
        setAgeSort(event.target.value);
    };

    return (
        <>
            <div className='dogs__top'>
                <p className='dogs__title'>Available Dogs</p>
                <div className="dogs__filter">
                    <select name="filter" id="filter" onChange={onFilterValueChange} value={sexFilter}>
                        <option value="all">All Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select name="sort" id="sort" onChange={onSortValueChange} value={ageSort}>
                        <option value="young_old">Young to Old</option>
                        <option value="old_young">Old to Young</option>
                    </select>
                </div>
            </div>

            <DogsList dogs={sortingByAge} />
        </>
    );
}

export default DogsApi;