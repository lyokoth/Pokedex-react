import React, { useEffect, useState} from 'react';
import './FeaturedPokemon.css';
import { Colors, StatColors, EggGroupColors } from '../../../Components/Routing/api';
import cardLogo from '../../../assets/icons8-pokeball-50.png';
import Swal from 'sweetalert2';
import { Card, CardHeader, Button, CardBody, Heading, Flex, Stack, CardFooter, Text, Progress } from '@chakra-ui/react';
import { Spinner, Center } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import axios from 'axios';
import Biology from '../../Pokedex/Pokemon_Info/Biology/Biology';


const FeaturedPokemonCard = ({ featuredPokemon, loading }) => {
    
const [abilityDescriptions, setAbilityDescriptions] = useState([]);

useEffect(() => {
    const fetchAbility = async () => {
        if (featuredPokemon) {
            try {
                const descriptions = await Promise.all(featuredPokemon.abilities.map(async (ability) => {
               
                    const response = await axios.get(ability.ability.url);
                    return response.data.flavor_text_entries[0].flavor_text;
                   
                }));

                setAbilityDescriptions(descriptions);
            } catch (error) {
                console.error('Error fetching ability descriptions:', error);
            }
        }
    };

    fetchAbility();
}, [featuredPokemon]);



    if (loading) {
        return (
       
                <Spinner
                    color='purple.500'
                    speed="0.65s"
                    emptyColor='gray.200'
                    size='xl'
                />
 
        );
    }

    if (!featuredPokemon) {
        return <div>
            <h1>Could not fetch featured Pokémon</h1>
            </div>;
    }

  

    const { sprites, types, abilities, stats, weight, effect_entries, evolves_from_species, evolution_chain } = featuredPokemon;

    const color = Colors[types[0].type.name];
    
    const styleBg = {
        backgroundColor: `${color}`,
    };

    const inches = (featuredPokemon.height * 3.93701).toFixed(0);
    const feet = Math.floor(Number(inches) / 12); 
    // for fetching ability from the id
    
    const handleAbilityClick = (ability) => {
        Swal.fire({
            title: 'Ability',
            text: abilityDescriptions[0], 
            icon: 'info',
            confirmButtonText: 'Close',
            confirmButtonColor: 'Colors[types[0].type.name]',
        });
    };



    return (
    <section className="featured-pokemon-container">
        <Card  className="card-featured">
          
            <CardHeader className="card-header">
                <Flex justifyContent="space-between">
                <img src={cardLogo} alt="pokeball" className="card-logo" />
                <img src={cardLogo} alt="pokeball" className="card-logo" />
                </Flex>
                <Center>
                    <Heading size="lg">Today's featured Pokémon:</Heading>
                </Center>

                <div className="featured">
                    <h2 className="featured-name">{featuredPokemon.name}</h2>

                    <h3 className="featured-id">#{String(`${featuredPokemon.id}`).padStart(3, 0)}</h3>
                    <h4> {featuredPokemon.genera.find((genus) => genus.language.name === 'en').genus}</h4>
                </div>
                
            </CardHeader>
            
            <CardBody className="card-body">
                <div className="pokemon-info">
                <Flex align="center">
                <div className="pokemon-sprites">
                    <a href={`/pokemon/${featuredPokemon.id}`}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${featuredPokemon.id}.png`} alt={featuredPokemon.name}
                    />
                   </a>
                </div>
                <div className="pokemon-attributes">
                  
                    <Stack direction="row">
                    <h4>Type(s):</h4>
                        {types.map((type, i) => (
                            <div className="type-card" key={i} style={{ backgroundColor: Colors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        ))}
                    </Stack>
                    <Stack direction="row">
                    <div className="item-ability-stats">
                        <ul className="pokemon-abilities">
                            <h3>Abilities:</h3>
                            {abilities.map((ability, i) => (
                                <li key={i}>
                                    <Button className="ability-button" onClick={(handleAbilityClick)} style={{ backgroundColor: Colors[types[0].type.name] }}>
                                    {ability.ability.name}  
                                </Button>
                               
                                {ability.is_hidden ? <span>(Hidden)</span> : null}
                             
                                </li> 
                            ))}
                        </ul>
                      
                    </div>
                    </Stack>
                    <Stack direction="row">
                        <h4>Height:</h4>
                        <Text>{`${feet}' ${(Number(inches) % 12, 2)}"`}</Text>
                    </Stack>
                    <Stack direction="row">
                        <h4>Weight:</h4>
                        <Text>{Math.abs(weight / 4.536).toFixed(1)} lbs</Text>
                    </Stack>


                  
              
         
                </div>
               
              
                </Flex>
                </div>
               
                <Card className="flavor-text">
                <Text>Pokédex Entry: {featuredPokemon.flavor_text_entries[0].flavor_text}</Text>
            </Card>
        
                
            </CardBody>
            
            
           
           
            <div className="pokemon-stats stats">
                <Tabs>
                    <TabList className='tab-list'>
                       
                        <Tab>Base Stats</Tab>
                        <Tab>Characteristics</Tab>
                        <Tab>Sprites</Tab>
                        <Tab>Location</Tab>
                        <Tab>Evolution</Tab>
                        
                    </TabList>
                
                        <CardBody>
                           <TabPanels>
                            
                            <TabPanel>

                                
                        <Heading size="lg">Base Stats:</Heading>
                        <Stack direction={{base: "column", md: "column"}} spacing={6}>
                       
                        {stats.map((stat, i) => (
                         <div key={i} className="stat-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginRight: '10px' }}>{stat.stat.name}: {stat.base_stat}</Text>
                       
                         <Progress 
                               
                                hasStripe value={stat.base_stat}
                                isAnimated="true"
                               flex="1" 
                                minWidth="100px"
                                size="md"
                            
                                backgroundColor={StatColors[stat.stat.name]} 
                                   />
                                 
                                      </div>
                                             ))}
                        <Text>BST: {stats.reduce((acc, stat) => acc + stat.base_stat, 0)}</Text>
                                        </Stack>
                        </TabPanel>
                        <TabPanel>
                       
                            <Stack direction={{base: "column", md: "row"}} spacing={2}>
                           
                            <div className="pokemon-physical">
                                <Heading size ='md'>Training:</Heading>
                                 <Stack direction="row">
                                <Text>Capture Rate: {featuredPokemon.capture_rate}</Text>
                                <Text size="sm">({((featuredPokemon.capture_rate / 255) * 100).toFixed(1)} %)</Text>
                               

                                </Stack>
                            </div>
                                </Stack>
                                <Stack direction="row">
            
                                <Text>Egg Groups: </Text>
                                <div className='eggGroup' style={{backgroundColor: EggGroupColors[featuredPokemon.egg_groups[0].name]}}>
                              {featuredPokemon.egg_groups[0].name}

                            </div>
                            </Stack>
                          

                        </TabPanel>
                    
                        <TabPanel>
                            <Heading size="lg">Sprites:</Heading>
                            <Stack direction={{base: "column", md: "row"}} spacing={2}>
                                <img src={sprites.front_default} alt={featuredPokemon.name} />
                                <img src={sprites.back_default} alt={featuredPokemon.name}  />
                                <img src={sprites.front_shiny} alt={featuredPokemon.name} />
                                <img src={sprites.back_shiny} alt={featuredPokemon.name} />
                                
                                </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Heading size="lg">Location</Heading>
                            <Stack direction={{base: "column", md: "row"}} spacing={2}>
                                <Stack direction="column">
                                    {featuredPokemon.location_area_encounters}

                                </Stack>
                                </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Heading size="lg">Evolution</Heading>
                            <Stack direction={{base: "column", md: "row"}} spacing={2}>
                                <Stack direction="column">
                                <Text>Evolution Chain:</Text>
                                {featuredPokemon.evolution_chain.url}
                                </Stack>
                                </Stack>
                        </TabPanel>

                        </TabPanels>

                        </CardBody>
                        </Tabs>
                </div>
                <Flex justifyContent="space-between">
                <img src={cardLogo} alt="pokeball" className="card-logo" />
                <img src={cardLogo} alt="pokeball" className="card-logo" />
                </Flex>
           
        </Card>
    </section>
    );
};

export default FeaturedPokemonCard;
// Path: src/Components/Home/FeaturedPokemonCard.js