import React, {useState, useEffect } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import './Generation.css';

import GenI from '../../../assets/GenI.jpg';
import GenII from '../../../assets/GenII.jpg';
import GenIII from '../../../assets/GenIII.jpg';
import GenIV from '../../../assets/GenIV.jpg';
import GenV from '../../../assets/Generation_V.jpg';
import GenVI from '../../../assets/GenVI.png';
import GenVII from '../../../assets/GenVII.jpg';
import GenVIII from '../../../assets/GenVIII.jpg';
import GenIX from '../../../assets/GenIX.png';
import { fetchPokemon } from '../../Routing/api';

import GenCard from './GenCard';

const Generation = ({ searchGeneration, setSearchGeneration }) => {
    const Regions = [
        {
            name: "Kanto",
            generation: "I",
            limit: 151,
            offset: 0,
            img: `${GenI}`,
        },
        {
            name: "Johto",
            generation: "II",
            limit: 100,
            offset: 151,
            img: `${GenII}`,
        },
        {
            name: "Hoenn",
            generation: "III",
            limit: 135,
            offset: 251,
            img: `${GenIII}`,
        },
        {
            name: "Sinnoh",
            limit: 108,
            generation: "IV",
            offset: 386,
            img: `${GenIV}`,
        },
        {
            name: "Unova",
            generation: "V",
            limit: 155,
            offset: 494,
            img: `${GenV}`,
        },
        {
            name: "Kalos",
            limit: 72,
            generation: "VI",
            offset: 649,
            img: `${GenVI}`,
        },
        {
            name: "Alola",
            limit: 88,
            generation: "VII",
            offset: 721,
            img: `${GenVII}`,
        },
        {
            name: "Galar",
            limit: 89,
            generation: "VIII",
            offset: 809,
            img: `${GenVIII}`,
        },
        {
            name: "Paldea",
            limit: 100,
            offset: 905,
            img: `${GenIX}`,
            generation: "IX",
        }
    


];

    return (
        <section
            className={`${
                searchGeneration
                    ? "generationContainer active"
                    : " generationContainer"
            }`}
        >
     <Box className='generationSection' overflowY='auto' h='500px'>
                <Heading>Generation</Heading>
                <Flex className='grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2 justify-items-center gap-x-3 md:gap-x-4 md:gap-y-5 gap-y-3 md:w-11/12 w-full mx-auto pb-4 overflow-y-scroll h-full'>
                    {Regions.map((generation) => (
                        <GenCard
                            key={generation.name}
                            generation={generation.generation}
                            image={generation.img}
                            limit={generation.limit}
                            offset={generation.offset}
                            searchGeneration={searchGeneration}
                        />
                    ))}
                </Flex>
            </Box>
         
        </section>
    );
};

export default Generation;