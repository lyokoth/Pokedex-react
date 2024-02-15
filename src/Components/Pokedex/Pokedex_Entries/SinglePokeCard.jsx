import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Spinner, Card, CardHeader, CardBody, Heading, Flex, Stack, Text, Progress, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import './PokeCard.css';
import pokeball from '../../../assets/pokeball-white.png';
import { Colors, StatColors } from '../../Routing/api';

const SinglePokeCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const speciesData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const species = await speciesData.json();


        setPokemon({...data, ...species});
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) {
    return <Spinner color='purple.500' speed="0.65s" emptyColor='gray.200' size='xl' />;
  }

  if (!pokemon) {
    return <div>Pokémon data not found.</div>;
  }

  const { stats, types, abilities, height, weight, base_experience } = pokemon;

  return (
    <div className="single-poke-card">
      <Card 
      
      className="card"
      maxW={{ base: '90%', md: '80%', lg: '70%' }}
     
      >
        <CardHeader className="header">
            <Heading size="lg" style={{textTransform:'capitalize'}}>{pokemon.name}</Heading>
            <Text>#{pokemon.id}</Text>
        </CardHeader>
        <CardBody className="body"  bg={Colors[types[0].type.name]}>
            <div className="info">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name} />
                <img src={pokeball} className="pokeball" alt="pokeball" />
            </div>
            <Flex>
                <Stack> 
                    <div className="attributes" style={{textTransform: 'capitalize', borderRadius: '10px'}}>
                        <Heading size="md">Type(s):</Heading>
                        <div className="type-container">
                        <Stack direction="row">
                        {types.map((type, index) => (
                            <Text key={index} style={{backgroundColor: Colors[type.type.name]}}>{type.type.name}</Text>
                        ))}
                        </Stack>
                        </div>

                        <Heading size="md">Abilities</Heading>
                        {abilities.map((ability, index) => (
                            <Text key={index}>{ability.ability.name}</Text>
                        ))}
                    </div>
                </Stack>
            </Flex>
                </CardBody>

            

                   <CardBody className="entries">
                    <Tabs>
                        <TabList className="attributes-tab-list">
                            <Tab>About</Tab>
                            <Tab>Stats</Tab>
                            <Tab>Evolution Chain</Tab>
                            <Tab>Moves</Tab>

                        </TabList>
                    
                    <CardBody>
                        <TabPanels>
                            <TabPanel>
                        
                <Heading size="md">Pokédex Entry:</Heading>
                <Text>{pokemon.flavor_text_entries[0].flavor_text}</Text>
                </TabPanel>
                <TabPanel>
               
            <Flex>
                <Stack>
                    <Card className="stats" style={{textTransform: 'capitalize'}}>
                        <Heading size="md">Stats</Heading>
                        
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-bar">
                             
                                <Text>{stat.stat.name}</Text>
                             
                                <Text>{stat.base_stat}</Text>
                                <Progress 
                                hasStripe={true}
                                flex="1" 
                                width={`${stat.base_stat}px`}
                                backgroundColor={StatColors[stat.stat.name]} />
                            </div>
                        ))}
                    
                    </Card>
                </Stack>
            </Flex>
            <Stack>
                <div className="physical-attributes">
                    <Heading size="md">Physical Attributes</Heading>
                    <Text>Height: {height / 10}m</Text>
                    <Text>Weight: {weight / 10}kg</Text>
            
                </div>
            </Stack>
            </TabPanel>
            <TabPanel>
                <Text>Evolution Chain</Text>
                <Text>Coming soon....</Text>

            </TabPanel>
           
            <TabPanel>
                <Text>Moves</Text>
            </TabPanel>
            </TabPanels>
        </CardBody>
            </Tabs>

          

        </CardBody>
        </Card>
    </div>
    );
                        };


export default SinglePokeCard;
