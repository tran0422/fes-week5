import React from 'react';

import '../components/AvailableDogs.css'
import DogsApi from '../components/DogsApi';

const AvailableDogs = ({dogs, setDogs}) => {
    // Function to set dogs data from DogsApi
    const setDogAPIdata = (fetchedDogs) => {
        setDogs(fetchedDogs); // Update the dogs state with fetched data
    };

    return (
            <div className='dogs__df'>
                <DogsApi dogs={dogs} setDogs={setDogAPIdata}  />
            </div>
    );
}

export default AvailableDogs;