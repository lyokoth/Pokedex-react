import React from 'react';
import './Generation.css';
import { Heading, } from '@chakra-ui/react';
import GenI from '../../../assets/GenI.jpg';
import GenII from '../../../assets/GenII.jpg';
import GenIII from '../../../assets/GenIII.jpg';
import GenIV from '../../../assets/GenIV.jpg';
import GenV from '../../../assets/Generation_V.jpg';
import GenVI from '../../../assets/GenVI.png';
import GenVII from '../../../assets/GenVII.jpg';
import GenVIII from '../../../assets/GenVIII.jpg';
import GenIX from '../../../assets/GenIX.png';
import GenCard from './GenCard';



const Generation = ({ searchGeneration}) => {
    


    const Regions = [
        {
            region: "Kanto",
            generation: "I",
            limit: 151,
            offset: 0,
            img: `${GenI}`,
     
        },
        {
            region: "Johto",
            generation: "II",
            limit: 100,
            offset: 151,
            img: `${GenII}`,
        },
        {
            region: "Hoenn",
            generation: "III",
            limit: 135,
            offset: 251,
            img: `${GenIII}`,
        },
        {
            region: "Sinnoh",
            limit: 107,
            generation: "IV",
            offset: 386,
            img: `${GenIV}`,
        },
        {
            region: "Unova",
            generation: "V",
            limit: 156,
            offset: 493,
            img: `${GenV}`,
        },
        {
            region: "Kalos",
            limit: 72,
            generation: "VI",
            offset: 649,
            img: `${GenVI}`,
        },
        {
            region: "Alola",
            limit: 88,
            generation: "VII",
            offset: 721,
            img: `${GenVII}`,
        },
        {
            region: "Galar",
            limit: 89,
            generation: "VIII",
            offset: 809,
            img: `${GenVIII}`,
        },
        {
            region: "Paldea",
            limit: 120,
            offset: 905,
            img: `${GenIX}`,
            generation: "IX",
        },
];





    return (
        <section
            className={`${
                searchGeneration
                    ? "generationContainer active"
                    : " generationContainer"
            }`}
        >

<article className='generationSection'>
                <Heading as="h1" className='text-lg font-extrabold pb-4'>Generation</Heading>
                <article className='grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-items-center gap-x-3 md:gap-x-4 md:gap-y-5 gap-y-3 md:w-11/12 w-full mx-auto pb-4 overflow-y-scroll h-full'>
                    {Regions.map((generation) => (
                        <GenCard
                            key={generation.region}
                            generation={generation.generation}
                            img={generation.img}
                            limit={generation.limit}
                            offset={generation.offset}
                          
                        />
                    ))}
                </article>
            </article>
        </section>
    );
};

export default Generation;