
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab, Spinner, Card, Heading, Flex, Stack, Text, Tabs, TabList, TabPanels, TabPanel, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';
import { Colors } from '../../Routing/api';
import pokeballBlack from '../../../assets/icons8-pokeball-48.png';
import About from '../Pokemon_Info/Tabs/About';
import Stats from '../Pokemon_Info/Tabs/Stats';
import Moves from '../Pokemon_Info/Tabs/Moves';
import Evolution from '../Pokemon_Info/Tabs/Evolution';
import Types from '../Pokemon_Info/Tabs/Type';
import './PokeCard.css';

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
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const speciesData = await speciesResponse.json();
        setPokemon({ ...data, ...speciesData });
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) {
    return <Spinner color="purple.500" speed="0.65s" emptyColor="gray.200" size="xl" />;
  }

  if (!pokemon) {
    return <div>Pokémon data not found.</div>;
  }

  const { stats, types, abilities, height, weight, sprites } = pokemon;
  const inches = (height * 3.93701).toFixed(0);
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  const kg = (weight / 10).toFixed(1);
  const jpnName = pokemon.names.find((name) => name.language.name === 'ja').name;

  const handleAbilityClick = async (e) => {
    const abilityName = e.target.innerText;
    const abilityResponse = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
    const abilityData = await abilityResponse.json();
    const description = abilityData.effect_entries.find((entry) => entry.language.name === 'en').short_effect;
    Swal.fire({
      title: abilityName,
      text: description,
      icon: 'info',
      confirmButtonText: 'Close',
      confirmButtonColor: Colors[types[0].type.name],
    });
  };

  return (
    <section className="pokemon-card" style={{ backgroundColor: Colors[types[0].type.name], margin: '10px' }}>
      <div className="arrow-back" style={{ marginRight: '1950px' }}>
        <Link to="/pokedex"><ArrowBackIcon w={10} h={10} /></Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: Colors[types[0].type.name], borderRadius: 20, border: '5px rgba(0, 0, 0, 0.20) solid', textTransform: 'capitalize', fontWeight: '600', fontSize: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '75%', padding: '20px' }}>
          <Flex justifyContent='space-between' style={{ width: '100%' }}>
            <img src={pokeballBlack} style={{ top: '10px', height: '110%' }} alt="pokeballBlack" className="pokemonBg rotar" />
            <img src={pokeballBlack} style={{ top: '10px', height: '110%' }} alt="pokeballBlack" className="pokemonBg rotar" />
          </Flex>
          <h1 className='capitalize text-3xl font-extrabold tracking-wider'>
            {pokemon.name} ({jpnName})
          </h1>
          <Text fontSize={'large'}>
            #{String(`${id}`).padStart(3, "0")}
          </Text>
          <Text fontSize='lg'>
            {pokemon.genera.find((genus) => genus.language.name === 'en').genus}
          </Text>
          <Flex justifyContent='space-between' style={{ width: '100%' }}>
            <img src={pokeballBlack} style={{ top: '10px', height: '110%' }} alt="pokeballBlack" className="pokemonBg rotar" />
            <img src={pokeballBlack} style={{ top: '10px', height: '110%' }} alt="pokeballBlack" className="pokemonBg rotar" />
          </Flex>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', padding: '20px' }}>
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent='center' alignItems='center' width='100%' padding='20px'>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <Stack direction="column">
                <Button>Height:</Button>
                <Text>{`${feet}' ${remainingInches}"`}</Text>
              </Stack>
            </li>
            <li>
              <Stack direction="column">
                <Button>Weight:</Button>
                <Text>{`${kg} kg`}</Text>
              </Stack>
            </li>
          </ul>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name} className="relative z-10 w-3/4 -bottom-4" />
        </Flex>

        <div className="pokemon-attributes">
          <div className="typeNameContainer">
            <Flex direction={{ base: 'column', md: 'row' }} className="type-container">
              <h4>Types:</h4>
              {types.map((type, index) => (
                <Text key={index} className="typeName" style={{ backgroundColor: Colors[type.type.name] }}>
                  {type.type.name}
                </Text>
              ))}
            </Flex>
          </div>
          <div className="item-ability-stats">
            <ul className="pokemon-abilities">
              <h3>Abilities:</h3>
              {abilities.map((ability, i) => (
                <li key={i}>
                  <Button className="ability-button" onClick={handleAbilityClick} style={{ backgroundColor: Colors[types[0].type.name] }}>
                    {ability.ability.name}
                  </Button>
                  {ability.is_hidden && <span>(Hidden)</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Card className="flavor-text">
        <Heading size="md">Pokédex Entries:</Heading>
        <Stack direction={{ base: 'row', md: 'row' }} spacing={4}>
          <Text>{pokemon.flavor_text_entries[0].flavor_text}</Text>
        </Stack>
      </Card>

      <Card className="attributes-card">
        <Tabs>
          <TabList>
            <Tab>About</Tab>
            <Tab>Stats</Tab>
            <Tab>Evolution</Tab>
            <Tab>Moves & Location</Tab>
            <Tab>Sprites</Tab>
            <Tab>Forms</Tab>
            <Tab>Type Chart</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <About pokemon={pokemon} />
            </TabPanel>
            <TabPanel>
              <Stats stats={stats} />
            </TabPanel>
            <TabPanel>
              <Heading size="md">Evolution Chain</Heading>
              <Evolution pokemon={pokemon} />
            </TabPanel>
            <TabPanel>
              <Moves pokemon={pokemon} />
            </TabPanel>
            <TabPanel>
              <Heading>Sprites:</Heading>
              <img src={sprites.front_default} alt={pokemon.name} />
              <img src={sprites.back_default} alt={pokemon.name} />
              <img src={sprites.front_shiny} alt={pokemon.name} />
              <img src={sprites.back_shiny} alt={pokemon.name} />
            </TabPanel>
            <TabPanel>
              <Heading>Forms:</Heading>
            </TabPanel>
            <TabPanel>
              <Types pokemon={pokemon} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </section>
  );
};

export default SinglePokeCard;
