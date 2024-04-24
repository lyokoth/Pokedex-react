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
                const weaknessesData = [];
                const resistancesData = [];
                const immunitiesData = [];
                for (const typeObj of pokemon.types) {
                    const res_type = await axios.get(typeObj.type.url);
                    const typeData = res_type.data;
                    weaknessesData.push(...typeData.damage_relations.double_damage_from);
                    resistancesData.push(...typeData.damage_relations.half_damage_from);
                    immunitiesData.push(...typeData.damage_relations.no_damage_from);
                }
                setWeaknesses(weaknessesData);
                setResistances(resistancesData);
                setImmunities(immunitiesData);
            } catch (error) {
                console.log('Error fetching type data:', error);
            }
        };

        fetchTypeUrl();
    }, [pokemon.types]);

    return (
        <Card w="100%" p={2} boxShadow="md" rounded="md" bg="white">
            <Stack spacing={2} p={2}>
                <Heading size="md">Type Effectiveness</Heading>
                <Divider />
                <Text>Supereffective damage from:</Text>
                <Stack direction="row" spacing={2}>
                    {weaknesses.map((weakness, index) => (
                        <Text 
                            className="flex flex-row my-2 mx-1 rounded-full md:text-base text-md typeName"
                            key={index} 
                            style={{ backgroundColor: Colors[weakness.name] }}>{weakness.name}</Text>
                    ))}
                </Stack>
            </Stack>
            <Divider />
            <Stack spacing={2} p={2}>
                <Text>0.5x damage from:</Text>
                <Stack direction="row" spacing={2}>
                    {resistances.map((resistance, index) => (
                        <Text 
                            className="flex flex-row my-2 mx-1 rounded-full md:text-base text-md typeName"
                            key={index} 
                            style={{ backgroundColor: Colors[resistance.name] }}>{resistance.name}</Text>
                    ))}
                </Stack>
            </Stack>
            <Divider />
            <Stack spacing={2} p={2}>
                <Text>No damage from:</Text>
                <Stack direction="row" spacing={2}>
                    {immunities.map((immunity, index) => (
                        <Text 
                            className="flex flex-row my-2 mx-1 rounded-full md:text-base text-md typeName"
                            key={index} 
                            style={{ backgroundColor: Colors[immunity.name] }}>{immunity.name}</Text>
                    ))}
                </Stack>
            </Stack>
        </Card>
    );
}

export default Types;
