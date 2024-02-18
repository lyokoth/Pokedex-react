import React from 'react'
import GenCard from './GenCard';
const Generation = ({ searchGeneration }) => {
    const regions = [
     {
        name: "Kanto",
        gen: 1,
        url: "https://pokeapi.co/api/v2/generation/1/",
        limit: 151,
        offset: 0,
     },
        {
            name: "Johto",
            gen: 2,
            url: "https://pokeapi.co/api/v2/generation/2/",
            limit: 100,
            offset: 151,
        },
        {
            name: "Hoenn",
            gen: 3,
            url: "https://pokeapi.co/api/v2/generation/3/",
            limit: 135,
            offset: 251,
        },
        {
            name: "Sinnoh",
            gen: 4,
            url: "https://pokeapi.co/api/v2/generation/4/",
            limit: 107,
            offset: 386,
        },
        {
            name: "Unova",
            gen: 5,
            url: "https://pokeapi.co/api/v2/generation/5/",
            limit: 156,
            offset: 493,
        },
        {
            name: "Kalos",
            gen: 6,
            url: "https://pokeapi.co/api/v2/generation/6/",
            limit: 72,
            offset: 649,
        },
        {
            name: "Alola",
            gen: 7,
            url: "https://pokeapi.co/api/v2/generation/7/",
            limit: 88,
            offset: 721,
        },
        {
            name: "Galar",
            gen: 8,
            url: "https://pokeapi.co/api/v2/generation/8/",
            limit: 89,
            offset: 809,
        },
        {
            name: "Paldea",
            gen: 9,
            url: "https://pokeapi.co/api/v2/generation/9/",
            limit: 100,
            offset: 898,
        },
    ];
    return (
        <section className={searchGeneration ? "generation-menu active" : "generation-menu"}>

        <div className="generation-menu">
            {regions.map((region) => (
                <GenCard key={region.name} gen={region.gen} limit={region.limit} offset={region.offset} />
            ))}
        </div>
        </section>
    )
}
export default Generation;

