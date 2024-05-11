import React from 'react';
import './Types';
import {fetchPokemonTypes} from '../../../Routing/api';
import './TypeFilter.css';
import { SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const TypeFilter = ({ typesFilter, setTypesFilter }) => {
    return (
                    <Button className='genMenu'>
                        <span
                            className='material-icons-outlined'
                            onClick={() => setTypesFilter(false)}
                        >
                            <p>Types</p>
                            <span className='material-icons-outlined icons'><SunIcon /></span>
                        </span>
                    </Button>
            
    );
};

export default TypeFilter;
