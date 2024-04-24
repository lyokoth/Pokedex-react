import React, { useState, useEffect } from 'react';
import { Grid, Flex, GridItem, Heading, Text, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { StatColors } from '../../Components/Routing/api';
import {Swal } from 'sweetalert2';
//import { AddIcon, MinusIcon } from '@chakra-ui/icons';
//import gridLogo from '../../assets/pokeball-white.png';



const getAllNatures = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/nature');
    const data = await response.json();
    return data.results;


};
 
const Natures = () => {
    const [natures, setNatures] = useState([]);
    const [search, setSearch] = useState('');

    const { name, increased_stat, decreased_stat, likes_flavor, hates_flavor } = natures;
    
    useEffect(() => {
        const fetchNatures = async () => {
            const natures = await getAllNatures();
            setNatures(natures);
        };
        fetchNatures();
    }, []);

    const filteredNatures = natures.filter((nature) => {
        if (search === '') {
            return true;
        } else {
            return nature.name.toLowerCase().includes(search.toLowerCase());
        }
    });

    return (
        <div>
            <Heading as="h1" size="lg" textAlign="center" mt={5} mb={5}>Natures</Heading>
            <Flex justifyContent="center" mb={5}>
                <Input
                    type="text"
                    placeholder="Search Natures"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IconButton
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={() => setSearch(search)}
                />
            </Flex>
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                justifyContent="center"
                alignItems="center"
                mb={5}
            >
                {filteredNatures.map((nature) => (
                    <GridItem
                        key={nature.name}
                        p={5}
                        boxShadow="md"
                        borderRadius="md"
                        bg={StatColors[nature.increased_stat]}
                    >
                        <Text textTransform={'capitalize'}>{nature.name}</Text>
                        <Text>Increased Stat: {increased_stat}</Text>
                        <Text>Decreased Stat: {decreased_stat}</Text>


                    </GridItem>
                ))}
            </Grid>
        </div>
    );
}
export default Natures;
// Path: src/pages/Natures/Natures.js
