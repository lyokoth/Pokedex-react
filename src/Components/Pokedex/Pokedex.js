import React, {useState, useEffect } from 'react';
import PokeList from './PokeList';
import { fetchPokemonData, fetchPokemon } from '../Routing/api';

const Pokedex = () => {
    const [clickedPokemon, setClickedPokemon] = useState(null);

    const handlePokemonClick = async (pokemon) => {
        setClickedPokemon(await fetchPokemonData(pokemon));
    }

    return (
        <div>
            <PokeList onSelectPokemon={handlePokemonClick} />
            {clickedPokemon && (
                <div>
                    <h1>{clickedPokemon.name}</h1>
                    <img src={clickedPokemon.sprites.front_default} alt={clickedPokemon.name} />
                </div>
            )}
        </div>
    )
};