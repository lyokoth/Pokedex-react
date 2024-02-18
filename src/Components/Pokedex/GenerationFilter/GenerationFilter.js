import React from 'react';
import PokedexContext from '../../../functions/Context';
import { useContext } from 'react';
import {fetchPokemon, fetchPokemonData} from '../../../functions/api';

const GenerationFilter = () => {
    const { setPokemon, setLoading } = useContext(PokedexContext);

    const getAllPokemons = async () => {
        setLoading(true);

        try {
            const data = await fetchPokemon(1126, 0);
            const promises = data.results.map(async (pokemon) => {
                return await fetchPokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);
            setPokemon(results);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <button
            className='genMenu'
            onClick={() => {
                getAllPokemons();
                // setDropActive(false);
            }}
        >
            <p>All Gen</p>
            <span className='material-icons-outlined icons'>bolt</span>
        </button>
    );
};

export default GenerationFilter;