import React, { useEffect } from 'react';
import { StatColors } from "../../../Routing/api";
import { Progress, Flex, Heading, Card, Stack, Text, Divider } from "@chakra-ui/react";
import axios from 'axios';



const Moves = ({pokemon}) => {
    useEffect(() => {
        const fetchMoves = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
                const data = await res.json();
                console.log(data);
                const move_url = data.moves.map(move => move.move.url);
                console.log(move_url);

            } catch (error) {
                console.log(error);
            }
        };

        fetchMoves();
    }, [pokemon]);

   


    return (
        <Flex direction={'column'}>
            <Stack direction={{base: "column", md: "column"}}>
                <Heading size="md">Moves:</Heading>
                <Card className="stats" style={{textTransform: 'capitalize'}}>
                    {pokemon.moves.map((move, i) => (
                        <div key={i} className="stat-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ marginRight: '10px' }}>{move.move.name}</Text>
                            <Text style={{ marginRight: '10px' }}>Level learned at: {move.version_group_details[0].level_learned_at}</Text>
                            <Progress
                                hasStripe value={move.version_group_details[0].level_learned_at}
                                flex="1"
                                isAnimated="true"
                                minWidth="100px"
                                size="md"
                                backgroundColor={index => StatColors[move.move.name]}></Progress>
                                <Divider  />
                                <Text style={{ marginRight: '10px' }}>Move Learn Method: {move.version_group_details[0].move_learn_method.name}</Text>
                        </div>
                    ))}
                </Card>
            </Stack>
        </Flex>
    );
}
export default Moves;
