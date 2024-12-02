import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AutocompleteInput from '../components/AutoComplete';
import '../components/Forms.css'

const Forms = ({ adoptApp, totalFee, removeToAdoptApp }) => {
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        email: '',
        age: 'yes',
        ownership: 'own',
        address: '',
        zip: '',
        contactNumber: '',
        preferredContact: '',
        reasonForDog: '',
        dogAllergies: false,
        previousDog: false,
        walkingTimes: '',
        confirmation: false,
        optInSubscribe: false,
    });

    const [suggestions, setSuggestions] = useState([]);

    const HERE_API_KEY = 'arjhTNRi6o01yy8RT7J5LK8dFCvAH8Ro0KtC449OuYk'; // Replace with your actual HERE API key

    useEffect(() => {
        // Set the current date as the default value for the date input
        const currentDate = new Date().toISOString().split('T')[0];
        setFormData((prevData) => ({
            ...prevData,
            date: currentDate,
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleAddressInputChange = async (e) => {
        const query = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            address: query,
        }));

        if (query.length >= 3) {  // Only start searching when input is at least 3 characters
            const response = await fetch(`https://geocode.search.hereapi.com/v1/autocomplete?q=${query}&apiKey=${HERE_API_KEY}`);
            const data = await response.json();
            const results = data.items || []; // 
            console.log(results);
            setSuggestions(results.map(item => item.address.label));
        } else {
            setSuggestions([]); // Clear suggestions when query.length = 3 or less.
        }
    };

    const handleSelectAddress = (item) => {
        setFormData((prevData) => ({
            ...prevData,
            address: item, // Directly set the selected address
        }));
        setSuggestions([]); // Clear suggestions once an address is selected
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log(formData);
    };

    return (
        <>
            <p className="form__h1-title">Adoption Application</p>
            <div className='form__table-container'>
                <div className="form__table-header">
                    <p className="form__header-desc">Dog</p>
                    <p className="form__header-fee">Fee ($)</p>
                </div>
            </div>
            <div className='form__table-details-container'>
                {adoptApp.length === 0 ? (
                    <p className='form__no-dogs'>No dogs have been selected yet. Please choose a dog to <Link to="/AvailableDogs">Adopt.</Link></p>
                ) : (<></>)}
                {
                    adoptApp.map((doggie) => {
                        return (
                            <div className='form__table-details' key={doggie.attributes.id}>
                                <figure className='form__table-img'>
                                    <img src={doggie.attributes.pictureThumbnailUrl} alt="" />
                                </figure>
                                <div className='form__table-name'>
                                    <p>{doggie.attributes.name}</p>
                                    <button className='form__remove-button' onClick={() => removeToAdoptApp(doggie)}>Remove</button>
                                </div>
                                <p className='form__table-fee'>{doggie.attributes.adoptionFeeString}</p>
                            </div>
                        );
                    })
                }
            </div>
            <div className='form__table-total-fee'>
                <p className='form__h2-title'>Adoption Fee, Total</p>
                <span>${totalFee}</span>
            </div>
            <div className='form__app'>
                <form onSubmit={handleSubmit}>
                    <div className='form__line form__df'>
                        <div>
                            <label htmlFor="age" className='form__padding'>* Are you 18 and older?</label>
                            <label className='form__padding'>
                                <input
                                    type="radio"
                                    id="ageYes"
                                    name="age"
                                    value="yes"
                                    checked={formData.age === 'yes'}
                                    onChange={handleChange}
                                />
                                Yes
                            </label>

                            <label className='form__padding'>
                                <input
                                    type="radio"
                                    id="ageNo"
                                    name="age"
                                    value="no"
                                    checked={formData.age === 'no'}
                                    onChange={handleChange}
                                />
                                No
                            </label>
                        </div>

                        <div>

                            <label htmlFor="date" className='form__padding'>Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='form__line form__df'>
                        <div>
                            <label htmlFor="name" className='form__padding'>* First and Last Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='form__name'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className='form__padding'>* Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='form__name'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="contactNumber" className='form__padding'>* Contact number</label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className='form__name'
                                required
                            />
                        </div>
                    </div>

                    <div className='form__preferredContact'>
                        <label htmlFor="preferredContact" className='form__padding'>* Preferred contact method</label>
                        <select
                            id="preferredContact"
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleChange}
                            required
                        >
                            <option value="email">Email</option>
                            <option value="phone">Text</option>
                        </select>
                    </div>

                    <div className='form__line form__addr'>
                        <div className='form__addr'>
                            <label htmlFor="address" className='form__padding'>* Street Address</label>
                            <div className='form__autocomplete'>
                                <AutocompleteInput
                                    value={formData.address}
                                    onChange={handleAddressInputChange}
                                    filteredItem={suggestions}
                                    onSelectItem={handleSelectAddress}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="ownership" className='form__padding form__ownership'>* Own or Rent</label>
                            <select
                                id="ownership"
                                name="ownership"
                                value={formData.ownership}
                                onChange={handleChange}
                                required
                            >
                                <option value="own">Own</option>
                                <option value="rent">Rent</option>
                            </select>
                        </div>
                    </div>

                    <div className='form__textarea form__line'>
                        <label htmlFor="reasonForDog">Why do you want a dog?</label>
                        <textarea
                            id="reasonForDog"
                            name="reasonForDog"
                            value={formData.reasonForDog}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className='form__line form__df'>
                        <div>
                            <label htmlFor="dogAllergies" className='form__padding'>Do you have or have lived with someone who has dog allergies?</label>
                            <input
                                type="checkbox"
                                id="dogAllergies"
                                name="dogAllergies"
                                checked={formData.dogAllergies}
                                onChange={handleChange}
                            />

                            <label htmlFor="previousDog" className='form__padding'>Have you owned a dog prior?</label>
                            <input
                                type="checkbox"
                                id="previousDog"
                                name="previousDog"
                                checked={formData.previousDog}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='form__line form__textarea'>
                        <label htmlFor="walkingTimes">How many times a day, and for how long each time can you walk a dog?</label>
                        <textarea
                            type="text"
                            id="walkingTimes"
                            name="walkingTimes"
                            value={formData.walkingTimes}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <p className='form__line'>
                        I hereby confirm that I have read and fully understand the contents of this application, including all questionnaires outlined herein. I acknowledge that I have had the opportunity to ask questions and seek clarification regarding any aspect of the application prior to submitting. I understand that THIS DOG RESCUE reserves the right to refuse the adoption of a dog to any individual, at its sole discretion, and that such refusal is final and not subject to appeal. By checking the box below, I agree to comply with all terms and conditions as set forth in this application, and I acknowledge that I am entering into a legally binding agreement with THIS DOG RESCUE.
                    </p>

                    <div className='form__line'>
                        <input
                            type="checkbox"
                            id="confirmation"
                            name="confirmation"
                            checked={formData.confirmation}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="confirmation">* I agree to the terms and conditions</label>
                    </div>

                    <div className='form__line'>
                        <input
                            type="checkbox"
                            id="optInSubscribe"
                            name="optInSubscribe"
                            checked={formData.optInSubscribe}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="subscribed">Add me to future email list subscriptions</label>
                    </div>

                    <button type="submit" className='form__submit-button'>Submit Application</button>

                </form>
            </div>
        </>
    );
};


export default Forms;