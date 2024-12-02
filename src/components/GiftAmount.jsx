import React, { useState } from "react";

const GiftAmount = () => {
    const [selectedGiftType, setSelectedGiftType] = useState(1);
    const giftTypeClick = (button_id) => {
        setSelectedGiftType(button_id);
    };

    const [selectedGiftAmount, setSelectedGiftAmount] = useState(10);
    const giftAmountClick = (amount) => {
        setSelectedGiftAmount(amount);
    };

    const giftAmountCustom = () => {
        setSelectedGiftAmount('custom');
    };

    return (
        <>
            <div className="gift__df">
                <div className="amount__df">
                    <p className="gift__title">Make a Donation</p>
                    <p className="amount__title">Gift Amount</p>
                    <button className={`gift__button-one ${selectedGiftType === 1 ? 'selected' : ''} `} onClick={() => giftTypeClick(1)}>One-Time Gift</button>
                    <button className={`gift__button-monthly ${selectedGiftType === 0 ? 'selected' : ''} `} onClick={() => giftTypeClick(0)}>Monthly Gift</button>
                    
                    <div className="amount__value">
                        {
                            [10, 50, 100, 200].map((amount) => (
                                <button
                                    className={`gift__button-value ${selectedGiftAmount === amount ? 'selected' : ''}`}
                                    key={amount}
                                    onClick={() => giftAmountClick(amount)}>${amount}</button>)
                            )
                        }

                        <input 
                        className={`gift__custom ${selectedGiftAmount === 'custom' ? 'selected' : ''}`} 
                        type="text" 
                        placeholder="Enter Amount"
                        onChange={giftAmountCustom}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GiftAmount;