import React from 'react';
import { Link } from "react-router-dom";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const Features = ({ featuredDogData }) => {
    const featureIDs = ['10957627', '15748910', '20564256', '15921437'];

    // Filter logic
    const filterValue = featuredDogData.filter(dog => featureIDs.includes(dog.id));

    return (
        <>
            <section className='features__df'>
                <p className='features__title'>Our Featured Dogs</p>
                <ul className='dogs__list'>
                    {filterValue.map(dog => (
                        <li key={dog.id} className='features__list-item'>
                            <figure className='features__figure-crop'>
                                {dog.attributes.pictureThumbnailUrl && <img src={dog.attributes.pictureThumbnailUrl} alt="" width="240px" height="auto" />}
                            </figure>

                            <p className='featured-dogs__name'>{dog.attributes.name}</p>
                            <p className='features__p'>Breed: {dog.attributes.breedPrimary}</p>
                            <p className='features__p'>Age: {dog.attributes.ageString || 'N/A'}</p>
                            <p className='features__p'>Fee: {dog.attributes.adoptionFeeString || 'N/A'}</p>
                            <br />
                            {/* The Link to below triggers the route in app.js, where DogsBios is called and the parameeter 'dogs' is passed into DogBios.js. No need to call DogBios.js directly from here, that is already done in app.js. */}
                            <Link to={`/AvailableDogs/${dog.id}`} className='features__link' onClick={scrollToTop}>Learn More</Link>



                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Features;