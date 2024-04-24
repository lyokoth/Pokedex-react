import React from 'react';
import PokedexContext from '../../../functions/Context';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import {fetchPokemon} from '../../Routing/api';
import { StarIcon } from '@chakra-ui/icons';

const GenerationFilter = () => {
    const { setAllPokemon, setLoading } = useContext(PokedexContext);
    const url = 'https://pokeapi.co/api/v2/pokemon-species?';

    const getAllPokemon = async () => {
        setLoading(true);

        try {
            const data = await fetchPokemon(10000, 0);
            const promises = data.results.map(async (pokemon) => {
                return await fetch(pokemon.url).then((res) => res.json());
            });
            const results = await Promise.all(promises);
            setAllPokemon(results);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }; 

    return (
        <Button
            className='genMenu'
            onClick={() => {
                getAllPokemon();
                // setDropActive(false);
            }}
        >
            <p>All Gens</p>
            <span className='material-icons-outlined icons'><StarIcon /></span>
        </Button>
    );
};

export default GenerationFilter;