import React, { useState, useEffect, useContext } from 'react';
import FeaturedPokemonCard from './FeaturedPokemonCard'; // Import FeaturedPokemonCard
import PokedexContext from '../../functions/Context';


const FeaturedPokemon = () => {
    const { loading, setLoading } = useContext(PokedexContext);
    const [featuredPokemon, setFeaturedPokemon] = useState(null);
    

    useEffect(() => {
        const fetchRandomPokemon = async () => {
            setLoading(true);
            try {
                const randomPokemonId = Math.floor(Math.random() * 1000) + 1;
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
                const data = await response.json();
                const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomPokemonId}`);
                const speciesData = await speciesResponse.json();
                
                setFeaturedPokemon({...data, ...speciesData})

            } catch (error) {
                console.error("Could not fetch random Pokemon: ", error);
            } finally {
                setLoading(false);
            }
        };


        fetchRandomPokemon();
     
    }, [setLoading]);


    return (
        <>
            <FeaturedPokemonCard featuredPokemon={featuredPokemon} loading={loading} />
        </>
    );
};

export default FeaturedPokemon;
