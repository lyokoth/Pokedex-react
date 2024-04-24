import React, { useState } from 'react';
import "./MenuBtn.css";

const MenuBtn = ({ setSearchGeneration, searchGeneration }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setSearchGeneration(!searchGeneration);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`hamburger hamburger--emphatic menu-btn ${isActive ? 'is-active' : ''}`}
            type='button'
            onClick={handleClick}
        >
            <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
            </span>
        </button>
    );
};

export default MenuBtn;
