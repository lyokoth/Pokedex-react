import React from 'react';
import './FeaturedPokemon.css';
import { Colors, StatColors } from '../../Components/Routing/api';
import cardLogo from '../../assets/icons8-pokeball-50.png';

import { Card, CardHeader, CardBody, Heading, Flex, Stack, CardFooter, Text, Progress } from '@chakra-ui/react';
import { Spinner, Center } from '@chakra-ui/react';

const FeaturedPokemonCard = ({ featuredPokemon, loading }) => {
    if (loading) {
        return (
            <Center>
                <Spinner
                    color='purple.500'
                    speed="0.65s"
                    emptyColor='gray.200'
                    size='xl'
                />
            </Center>
        );
    }

    if (!featuredPokemon) {
        return <div>No featured Pokémon available.</div>;
    }

    const { sprites, types, abilities, stats } = featuredPokemon;
    const color = Colors[types[0].type.name];
    
    const styleBg = {
        backgroundColor: `${color}`,
    };

    featuredPokemon.height = featuredPokemon.height * 10;




    return (
    <section className="featured-pokemon-container">
        <Card bg='blue.50' className="card">
          
            <CardHeader className="card-header">
                <img src={cardLogo} alt="pokeball" className="card-logo" />
          
                <Center>
                    <Heading size="lg">Today's featured Pokémon:</Heading>
                </Center>

                <div className="featured">
                    <h2 className="featured-name">{featuredPokemon.name}</h2>
                    <h3 className="featured-id">#{featuredPokemon.id}</h3>
                </div>
                
            </CardHeader>
            
            <CardBody className="card-body">
                <div className="pokemon-info">
                <Flex align="center">
                <div className="pokemon-sprites">
                    <img src={sprites.front_default} alt={featuredPokemon.name} className="sprites" />
                    <img src={sprites.back_default} alt={featuredPokemon.name} className="sprites" />
                </div>
                <div className="pokemon-attributes">
                    <h3>Type(s):</h3>
                    <Stack direction="row">
                        {types.map((type, i) => (
                            <div className="type-card" key={i} style={{ backgroundColor: Colors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        ))}
                    </Stack>
                    <div className="item-ability-stats">
                        <ul className="pokemon-abilities">
                            <h3>Abilities:</h3>
                            {abilities.map((ability, i) => (
                                <li key={i}>{ability.ability.name}</li>
                            ))}

                        </ul>
                    </div>
              
         
                </div>

              
                </Flex>
                </div>
                
            </CardBody>
            <CardFooter className="flavor-text">
                <Text>Pokedex Entry: {featuredPokemon.flavor_text_entries[0].flavor_text}</Text>
            </CardFooter>
           
            <div className="pokemon-stats stats">
                        <CardBody bg='purple.100'>
                        <Heading size="lg">Base Stats:</Heading>
                        <Stack direction={{base: "column", md: "row"}} spacing={2}>
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-bar">
                                <Text>{stat.stat.name}</Text>
                                <Text>{stat.base_stat}</Text>
                                <Progress flex="1" value={stat.base_stat} backgroundColor={StatColors[stat.stat.name]} />
                            </div>
                        ))}
                        </Stack>
                        </CardBody>
                </div>
          
           
        </Card>
    </section>
    );
};

export default FeaturedPokemonCard;
// Path: src/Components/Home/FeaturedPokemonCard.js