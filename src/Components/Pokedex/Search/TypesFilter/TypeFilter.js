import React from 'react';
import './Types';
import {fetchPokemonTypes} from '../../../Routing/api';
import './TypeFilter.css';

const TypeFilter = ({ typesFilter, setTypesFilter }) => {

    
    <section
    className={`${
        typesFilter ? "typesContainer active" : "typesContainer"
    }`}
>
    <article className='typesFilter overflow-scroll'>
        <div className='flex items-center justify-between mb-5'>
            <h2 className='text-lg font-medium'>Types List:</h2>
            <button className='flex items-center jutsify-end'>
                <span
                    className='material-icons-outlined'
                    onClick={() => setTypesFilter(false)}
                >
                    Close
                </span>
            </button>
        </div>
    </article>
</section>
}

export default TypeFilter;