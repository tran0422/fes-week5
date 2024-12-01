import { Link } from "react-router-dom";
import React from "react";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    
}

const DogsList = ({ dogs }) => {
    return (
        <div className="dogs__results">
            {dogs.length === 0 ? (
                <p>No dogs available for adoption at the moment.</p>
            ) : (
                <ul className='dogs__list'>
                    {dogs.map(dog => (
                        <li key={dog.id} className='dogs__list-item'>
                            <p className='dogs__name'>{dog.attributes.name}</p>

                            {dog.attributes.pictureThumbnailUrl && <img src={dog.attributes.pictureThumbnailUrl} alt="" width="160px" height="auto" className='dogs__img' />}
                            <div className='dogs__overlay'>
                                <p className='dogs__p'>Gender: {dog.attributes.sex}</p>
                                <p className='dogs__p'>Breed: {dog.attributes.breedPrimary}</p>
                                <p className='dogs__p'>Age: {dog.attributes.ageString || 'N/A'}</p>
                                <p className='dogs__p'>Fee: {dog.attributes.adoptionFeeString || 'N/A'}</p>
                                <br />
                                {/* The Link to below triggers the route in app.js, where DogsBios is called and the parameeter 'dogs' is passed into DogBios.js. No need to call DogBios.js directly from here, that is already done in app.js. */}
                                <Link to={`/AvailableDogs/${dog.id}`} className='dogs__link' onClick={scrollToTop}>Learn More</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DogsList;