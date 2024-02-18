import React from 'react';
import PokedexContext from '../../../functions/Context';
import { useContext } from 'react';
import {fetchPokemon, fetchPokemonData} from '../../../functions/api';
 
const  GenCard = ({gen, limit, offset}) => {
  const {setPokemon, setLoading} = useContext(PokedexContext);

  const getPokemonGen = async () => {
    setLoading(true);

    try {
        const data = await fetchPokemon(limit, offset);
        const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
            const pokemonRecord = await fetchPokemonData(pokemon.name);
            return pokemonRecord;
        }));
        setPokemon(pokemonData);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
        setLoading(false);
    }
 const handleGenClick = () => {
        getPokemonGen();
    }

  return (

    <figure className="gen-card" onClick={handleGenClick}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${gen}.png`} alt={gen} />
        <figcaption>{gen}</figcaption>
    </figure>
  )
}

export default GenCard;