import React, { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import '../components/DogBios.css'

const DogBios = ({ dogs, addToAdoptApp, adoptApp, setHeartPosition }) => {
    const [isAdopted, setIsAdopted] = useState(false);
    const [isHeartAnimating, setIsHeartAnimating] = useState(false);
    const buttonRef = useRef(null); // Referencing the Adopt button

    const { id } = useParams();
    const specificDog = dogs.find(dog => +dog.id === +id);

    if (!specificDog) {
        return <div>Dog not Found</div>
    }

    const ifDogExist = () => {
        return adoptApp.find(dog => +dog.id === +id);
    }

    const handleAdoptClick = () => {
        addToAdoptApp(specificDog);
        setIsAdopted(true);
        setIsHeartAnimating(true);

        // Get the position of the Adopt button
        if (buttonRef.current) {
            setHeartPosition(buttonRef.current.getBoundingClientRect());
        }

        setTimeout(() => {
            setIsHeartAnimating(false);
        }, 8000);
    };

    // Helper: generate picture URL safely
    const generatePictureUrl = (picId) => {
        const templateUrl = specificDog.attributes.pictureThumbnailUrl;
        return templateUrl.replace(/\/[^/]+\.jpg/, `/${picId}.jpg`);
    };

    return (
        <div className="specific__width">
            <div className="specific__df">

                <div className="specific__gallery">
                    {specificDog.relationships.pictures.data.map(pic => (
                        <img
                            key={pic.id}
                            src={generatePictureUrl(pic.id)}
                            alt={specificDog.attributes.name}
                            className=""
                        />
                    ))}
                </div>

                <div className="specific__section-container">
                    <p className="specific__title">{specificDog.attributes.name}</p>
                    <p className='specific__sub-title'>Breed: {specificDog.attributes.breedString}</p>
                    <p className='specific__sub-title'>Gender: {specificDog.attributes.sex}</p>
                    <p className='specific__sub-title'>Age: {specificDog.attributes.ageString || 'N/A'}</p>
                    <p className='specific__sub-title'>Coat Length: {specificDog.attributes.coatLength || 'N/A'}</p>
                    <p className='specific__sub-title'>Vaccination Status: {specificDog.attributes.isCurrentVaccinations ? 'Current' : 'Pending'}</p>
                    <p className='specific__sub-title'>Adoption Fee: {specificDog.attributes.adoptionFeeString || 'N/A'}</p>
                </div>
            </div>

            <p className="specific__p" dangerouslySetInnerHTML={{ __html: specificDog.attributes.descriptionText }} />

            {ifDogExist() ? (
                <Link to={"/Forms"}>
                    <button className="specific__button">Go to App
                        {isAdopted && isHeartAnimating && (
                            <FontAwesomeIcon icon={faHeart} className="heart-icon animating" />
                        )}
                    </button>
                </Link>
            ) : (
                <button ref={buttonRef} className="specific__button" onClick={handleAdoptClick}>Adopt {specificDog.attributes.name}</button>
            )}
        </div>
    )
}

export default DogBios;