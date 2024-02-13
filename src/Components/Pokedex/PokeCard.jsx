import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Flex, Stack, Heading } from '@chakra-ui/react';
import pokelogo from '../../assets/icons8-pokeball-64.png';
import {Colors, StatColors} from '../../Components/Routing/api';
import './PokeCard.css';

const PokeCard = ({pokemon}) => {
    const color = Colors[pokemon.types[0].type.name];
    const styleBg = {
        backgroundColor: `${color}`,
    };
    return (
        <section className="poke-card-container">
            <Card bg='blue.50' className="poke-card" style={styleBg}>
                <CardHeader className="poke-card-header">
                    <img src={pokelogo} alt="pokeball" className="poke-logo" />
                    <Flex justify="center">
                        <Text className="poke-name">{pokemon.name}</Text>
                    </Flex>
                </CardHeader>
                <Flex justify="center">
                    <Stack>
                        <Text className="poke-id">#{pokemon.id}</Text>
                    </Stack>
                </Flex>
                <CardBody className="poke-card-body">
                    <Text className="poke-type">Type: {pokemon.types[0].type.name}</Text>
                </CardBody>
                <CardBody className="poke-card-flavor-text">
                    <Text>{pokemon.flavor_text_entries[0].flavor_text}</Text>
                </CardBody>
                
                <CardFooter className="poke-card-footer">
                    <Heading>Base Stats:</Heading>
                    <Stack>
                        {pokemon.stats.map((stat, i) => (
                            <div key={i} className="stat-card" style={{ backgroundColor: StatColors[stat.stat.name] }}>
                                <Text>{stat.stat.name}: {stat.base_stat}</Text>
                            </div>
                        ))}
                    </Stack>
                </CardFooter>
                <CardFooter className="poke-card-footer-evolution">
                    <Heading>Evolution Chain:</Heading>
                    <Stack>
                        <Text>Coming soon!</Text>
                    </Stack>
                </CardFooter>
            </Card>
        </section>
    )
}
export default PokeCard;