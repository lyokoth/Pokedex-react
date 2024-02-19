import "./GenBtn.css";

import React from 'react';
import './GenBtn.css';

const GenBtn = ({ setSearchGeneration, searchGeneration }) => {
    const handleClick = () => {
        setSearchGeneration(!searchGeneration);
    };

    return (
        <button
            className='hamburger hamburger--emphatic menu-btn'
            type='button'
            onClick={handleClick}
        >
            <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
            </span>
        </button>
    );
};

export default GenBtn;
// Path: src/Components/Pokedex/GenerationFilter/GenButton.js