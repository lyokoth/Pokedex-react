import {SearchIcon} from '@chakra-ui/icons';
import React from 'react' ;   
import './Search.css';

const SearchBar = () => {
    return (
        <form className='relative flex items-center w-4/5 mx-auto md:my-9 my-3'>
            <span className='material-icons-outlined absolute left-3.5'>
                <SearchIcon />
            </span>
            <input
                type='search'
                autoComplete='off'
                placeholder='Search Pokemon, Type, or Ability'
                className='SearchBar'
            />
        </form>
    );
};

export default SearchBar;

// expand later