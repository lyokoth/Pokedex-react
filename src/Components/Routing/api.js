import axios from 'axios';

const apiUrl ='https://pokeapi.co/api/v2/pokemon';


export const fetchPokemonData = async (pokemon, setPokemonData) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await axios.get(url);
        setPokemonData(res.data);
    } catch (e) {
        console.log(e);
    }
}

export const fetchPokemon = async (limit = 24, offset = 0) => {
    try {
        let url = `${apiUrl}?limit=${limit}&offset=${offset}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchPokemonSpecies = async (pokemon) => {
    try {
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
        const speciesData = await speciesResponse.json();
        return speciesData;
    } catch (error) {
        console.log(error);
    
    }
}



export const Colors = {
   normal: '#A0AEC0',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8F8',
    fairy: '#EE99AC',


    
}

export const StatColors = {
    hp: '#FF5959',
    attack: '#F5AC78',
    defense: '#FAE078',
    'special-attack': '#9DB7F5',
    'special-defense': '#A7DB8D',
    speed: '#FA92B2'

}


export const fetchPokemonLocation = async (pokemon) => {
    try {
        const res = await fetch(`${apiUrl}/${pokemon}/encounters`);
        const data = await res.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}


// import React from 'react';

// // export const getPokemonMatchups = async (pokemonType) => {
// //     try {
// //         const res = await fetch(pokemonType);
// //         const data = await res.json();
// //         return data;
// //     } catch (err) {
// //         console.log(err);
// //     }
// // };

// export const pokemonMatchups = {
//     normal: {
//         ghost: 0,
//         fighting: 2,
//     },

//     fire: {
//         bug: 0.5,
//         fairy: 0.5,
//         fire: 0.5,
//         grass: 0.5,
//         ice: 0.5,
//         steel: 0.5,
//         ground: 2,
//         rock: 2,
//         water: 2,
//     },

//     water: {
//         fire: 0.5,
//         ice: 0.5,
//         steel: 0.5,
//         water: 0.5,
//         electric: 2,
//         grass: 2,
//     },

//     electric: {
//         electric: 0.5,
//         flying: 0.5,
//         steel: 0.5,
//         ground: 2,
//     },

//     grass: {
//         electric: 0.5,
//         grass: 0.5,
//         ground: 0.5,
//         water: 0.5,
//         bug: 2,
//         ice: 2,
//         flying: 2,
//         fire: 2,
//         poison: 2,
//     },

//     ice: {
//         ice: 0.5,
//         fire: 2,
//         fighting: 2,
//         rock: 2,
//         steel: 2,
//     },

//     fighting: {
//         bug: 0.5,
//         rock: 0.5,
//         dark: 0.5,
//         flying: 2,
//         psychic: 2,
//         fairy: 2,
//     },

//     poison: {
//         fighting: 0.5,
//         poison: 0.5,
//         bug: 0.5,
//         fairy: 0.5,
//         ground: 2,
//         psychic: 2,
//     },

//     ground: {
//         electric: 0,
//         poison: 0.5,
//         rock: 0.5,
//         water: 2,
//         grass: 2,
//         ice: 2,
//     },

//     flying: {
//         ground: 0,
//         grass: 0.5,
//         fighting: 0.5,
//         bug: 0.5,
//         electric: 2,
//         ice: 2,
//         rock: 2,
//     },

//     psychic: {
//         fighting: 0.5,
//         psychic: 0.5,
//         bug: 2,
//         ghost: 2,
//         dark: 2,
//     },

//     bug: {
//         grass: 0.5,
//         fighting: 0.5,
//         ground: 0.5,
//         fire: 2,
//         flying: 2,
//         rock: 2,
//     },

//     rock: {
//         normal: 0.5,
//         fire: 0.5,
//         poison: 0.5,
//         flying: 0.5,
//         water: 2,
//         grass: 2,
//         fighting: 2,
//         ground: 2,
//         steel: 2,
//     },

//     ghost: {
//         normal: 0,
//         fighting: 0,
//         poison: 0.5,
//         bug: 0.5,
//         ghost: 2,
//         dark: 2,
//     },

//     dragon: {
//         fire: 0.5,
//         water: 0.5,
//         electric: 0.5,
//         grass: 0.5,
//         ice: 2,
//         dragon: 2,
//         fairy: 2,
//     },

//     dark: {
//         psychic: 0,
//         ghost: 0.5,
//         dark: 0.5,
//         fighting: 2,
//         bug: 2,
//         fairy: 2,
//     },

//     steel: {
//         poison: 0,
//         normal: 0.5,
//         grass: 0.5,
//         ice: 0.5,
//         flying: 0.5,
//         psychic: 0.5,
//         bug: 0.5,
//         rock: 0.5,
//         dragon: 0.5,
//         steel: 0.5,
//         fairy: 0.5,
//         fire: 2,
//         fighting: 2,
//         ground: 2,
//     },

//     fairy: {
//         dragon: 0,
//         fighting: 0.5,
//         bug: 0.5,
//         dark: 0.5,
//         poison: 2,
//         steel: 2,
//     },
// };

// Path: src/Components/Routing/api.js
// add matchups later