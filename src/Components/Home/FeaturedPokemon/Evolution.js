import React, { useEffect, useState } from 'react';
import { Colors } from '../../Routing/api';
import axios from 'axios';
import {  Stack, Text, Image, Card, Flex} from "@chakra-ui/react";
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


const Evolution = ({ featuredPokemon, sprites }) => {
    const {evolution_chain, type} = featuredPokemon;
    const [evolution, setEvolution] = useState([]);
    const [preEvolution, setPreEvolution] = useState([]);
    const [finalEvolution, setFinalEvolution] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvolution = async () => {
            try {
                const res = await axios.get(evolution_chain.url);
                const data = res.data;
                console.log(data);
                const evolution = data.chain.evolves_to.map(evolution => evolution.species.name);
                const preEvolution = data.chain.evolves_from ? data.chain.evolves_from.species.name : evolution[0];
                const finalEvolution = data.chain.evolves_to[0].evolves_to[0] ? data.chain.evolves_to[0].evolves_to[0].species.name : null;
                
                setPreEvolution(preEvolution);
                setEvolution(evolution);
                setFinalEvolution(finalEvolution);
            } catch (error) {
                console.log(error);
            }
        };

        fetchEvolution();
    }, [evolution_chain]);

    if (!evolution) return <div>This Pokemon does not evolve.</div>
    

    return(
        <Card style={{border: '1px'}}>
            <Stack>
                <Text>Evolution</Text>
                <Flex>

                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution[0]}.png`} alt={evolution[0]} />
                    <ArrowRightIcon />
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${finalEvolution}.png`} alt={finalEvolution} />
                </Flex>
            </Stack>
        </Card>
    );
}
export default Evolution;
