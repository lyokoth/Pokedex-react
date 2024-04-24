import React, {useState, useEffect, useContext } from 'react';
import PokedexContext from '../../functions/Context';
import SinglePokeCard from './Pokedex_Entries/SinglePokeCard';

const Pokedex = () => {
    const [pokemon, setPokemon] = useState([]);
    const { loading, setLoading } = useContext(PokedexContext);

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            try {
              
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}?limit=151&offset=0`);
                const data = await res.json();
                const speciesData= await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}?limit=151&offset=0`);
                const species = await speciesData.json();

                setPokemon({...data, ...species});
                console.log('Data is loaded');
            } catch (error) {
                console.log(error);
            }
        };

        fetchPokemon();
    }, [pokemon, setLoading]);

    return (
        <>
            <SinglePokeCard pokemon={pokemon} loading={loading} />
        </>
    );
}
export default Pokedex;