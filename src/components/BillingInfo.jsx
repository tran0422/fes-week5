import React, { useState, useEffect } from 'react';

import FetchapiCountry from "./FetchapiCountry"
import FetchapiStates from "./FetchapiStates"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const BillingInfo = () => {
    const [searchCountries, setSearchCountries] = useState('');
    const [searchStates, setSearchStates] = useState('');

    const handleSelectState = (selectState) => {
        setSearchStates(selectState);
    };
    const handleSelectCountry = (selectCountry) => {
        setSearchCountries(selectCountry);
    };

    return (
        <>
            <div className="billing__df">
                <form className="billing__form" action=" ">
                    <p className="billing__title">Billing Info</p>

                    <div className="form__group">
                        <div className="form__row">
                            <label htmlFor="">* First Name</label><br />
                            <input className="input__style" type="text" name="firstName" id="" />
                        </div>
                        <div className="form__row">
                            <label htmlFor="">* Last Name</label><br />
                            <input className="input__style" type="text" name="lastName" id="" />
                        </div>
                    </div>

                    <div className="form__group">
                        <div className="form__row">
                            <label htmlFor="">* Address</label><br />
                            <input className="input__style" type="text" name="address" id="" />
                        </div>
                        <div className="form__row">
                            <label htmlFor="">* City</label><br />
                            <input className="input__style" type="text" name="city" id="" />
                        </div>
                    </div>

                    <div className="form__group">
                        <div className="form__row">
                            <label htmlFor="">* State/Province</label><br />
                            <FetchapiStates onSelectState={handleSelectState} />
                        </div>
                        <div className="form__row">
                            <label htmlFor="">* ZIP/Postal Code</label><br />
                            <input className="input__style" type="text" name="zipcode" id="" />
                        </div>
                    </div>

                    <div className="form__group">
                        <div className="form__row">
                            <label htmlFor="">* Country</label><br />
                            <FetchapiCountry onSelectCountry={handleSelectCountry} />
                        </div>
                        <div className="form__row">
                            <label htmlFor="">* Email</label><br />
                            <input className="input__style" type="email" name="email" id="" />
                        </div>
                    </div>
                    <a href="https://www.paypal.com/us/home" className="button__paypal" target="_blank" rel='noreferrer'> Pay via <FontAwesomeIcon icon={faPaypal} className="paypal__img" /> </a>

                </form >
            </div >

        </>
    );
}

export default BillingInfo;