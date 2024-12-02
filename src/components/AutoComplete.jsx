import React from 'react';

const AutocompleteInput = ({ value, onChange, filteredItem, onSelectItem }) => {
    return (
        <div>
            {/* The input field with autocomplete */}
            <input
                className='input__style'
                type="text"
                value={value} // Controlled value
                onChange={onChange} // Update on change
                autoComplete="off"
            />

            {/* Autocomplete suggestions, shown as the user types */}
            {filteredItem.length > 0 && value && (
                <ul style={{ border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto' }}>
                    {filteredItem.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => onSelectItem(item)} // When a item is selected
                            style={{
                                padding: '8px',
                                cursor: 'pointer',
                                backgroundColor: value === item ? '#ddd' : 'white',
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteInput;
