import React, { useEffect, useState } from 'react';
import { Colors } from '../../../Routing/api';
import axios from 'axios';
import { Progress, Flex, Heading, Card, Stack, Text, Divider } from "@chakra-ui/react";

const Types = ({ pokemon }) => {
    const [weaknesses, setWeaknesses] = useState([]);
    const [resistances, setResistances] = useState([]);
    const [immunities, setImmunities] = useState([]);


    useEffect(() => {
        const fetchTypeUrl = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`);
                const type_url = res.data.types[0].type.url;
                const res_type = await axios.get(type_url);
                const typeData = res_type.data;
                
                const weaknessesData = typeData.damage_relations.double_damage_from;
                setWeaknesses(weaknessesData);
                const resistancesData = typeData.damage_relations.half_damage_from;
                setResistances(resistancesData);
                const immunitiesData = typeData.damage_relations.no_damage_from;
                setImmunities(immunitiesData);
                console.log('weaknesses:', weaknessesData);
            } catch (error) {
                console.log('Error fetching type data:', error);
            }
        };
    
        fetchTypeUrl();
    }, [pokemon.id]);

    return (
        <Card w="100%" p={2} boxShadow="md" rounded="md" bg="white">
            <Stack spacing={2} p={2}>
                <Text fontWeight="bold">Type</Text>
                <Divider />
                <Text>Double Damage To:</Text>
                <Stack direction="row" spacing={2}>
                    {weaknesses.map((weakness, index) => (
                        <Text 
                        className="flex flex-row my-2 mx-1 rounded-full md:text-base text-md typeName"
                        key={index} 
                        style={{ backgroundColor: Colors[weakness.name]}}>{weakness.name}</Text>
                    ))}
                </Stack>
            </Stack>
            <Divider />
            <Stack spacing={2} p={2}>
                <Text>Half Damage To:</Text>
                <Stack direction="row" spacing={2}>
                    {resistances.map((resistance, index) => (
                        <Text 
                        className="flex flex-row my-2 mx-1 rounded-full md:text-base text-md typeName"
                        key={index} 
                        style={{ backgroundColor: Colors[resistance.name]}}>{resistance.name}</Text>
                    ))}
                </Stack>
            </Stack>
            <Stack spacing={2} p={2}>
                <Text>No Damage To:</Text>
                <Stack direction="row" spacing={2}>
                    {immunities.map((immunity, index) => (
                        <Text 
                        className="flex flex-row my-2 mx-1 rounded-full md:text-base text-md typeName"
                        key={index} 
                        style={{backgroundColors: Colors[immunity.name]}}>{immunity.name}</Text>
                    ))}
                </Stack>
            </Stack>
        </Card>
    );
}

export default Types;
