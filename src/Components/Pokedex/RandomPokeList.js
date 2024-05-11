import React, { useState, useEffect, useContext } from 'react';
import PokedexContext from '../../functions/Context';

// sift through the data and return 10 random pokemon to put on screen when button is toggled

const RandomPokeList = () => {
    const { allPokemon, setAllPokemon, loading, setLoading } = useContext(PokedexContext);
    const [randomPokemon, setRandomPokemon] = useState([]);
    const [showRandom, setShowRandom] = useState(false);

    useEffect(() => {
        if (allPokemon.length > 0) {
            const randomPoke = [];
            for (let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * allPokemon.length);
                randomPoke.push(allPokemon[randomIndex]);
            }
            setRandomPokemon(randomPoke);
        }
    }, [allPokemon]);

    const handleRandomClick = () => {
        setShowRandom(!showRandom);
    };

    return (
        <div className="randomPokeList">
            <button className="randomButton" onClick={handleRandomClick}>
                {showRandom ? 'Hide Random Pokemon' : 'Show Random Pokemon'}
            </button>
            {showRandom && (
                <div className="randomPokemon">
                    {randomPokemon.map((pokemon) => (
                        <div key={pokemon.id} className="randomPokeCard">
                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                            <h3>{pokemon.name}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default RandomPokeList;