import React, { useState, useEffect, useContext } from 'react';
import { Grid, GridItem, Box, Heading, Text, Button, Divider } from '@chakra-ui/react';
import {Colors, fetchPokemon, fetchPokemonData} from '../../Components/Routing/api';
import Swal from 'sweetalert2';
import PokedexContext from '../../functions/Context';
import {useNavigate} from 'react-router-dom';


export const TeamBuilder = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [type, setType] = useState('');

  const {loading, setLoading, error, setError, setSinglePokemon, setAllPokemon} = useContext(PokedexContext);


useEffect(() => {
  const fetchKantoPokemon = async () => {
    setLoading(true);
    try {
      const data = await fetchPokemon(151, 0);
      const promises = data.results.map(async (pokemon) => {
        return await fetch(pokemon.url).then((res) => res.json());
      }
      );
      const results = await Promise.all(promises);
      setAllPokemon(results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  fetchKantoPokemon();
}, []);

useEffect(() => {
  if (search.trim() === '') {
    setPokemonData([]);
  } else {
    const filtered = setAllPokemon.filter((pokemon) => {
      return pokemon.name.includes(search.toLowerCase());
    });
    setPokemonData(filtered);

  }
}, []);

const handleAddPokemon = (pokemon) => {
  navigate('/teambuilder/addpokemon')
  if ( selectedPokemon.length < 6) {
    Swal.fire({
      "title": "Team Full",
      "text": "You can only have 6 members on your team!",
      "icon": "error",
    });
  }

const filteredPokemon = pokemonData.length > 0 ? pokemonData : setAllPokemon;

const handleRemovePokemon = (index) => {
  const newTeam = selectedPokemon.filter((pokemon, i) => i !== index);
  setSelectedPokemon(newTeam);
};

const sendTeamToBot = () => {
  if (selectedPokemon.length === 0) {
    Swal.fire({
      "title": "No Pokémon Selected",
      "text": "You must select at least one Pokémon to send to the bot!",
      "icon": "error",
    });
  } else {
    Swal.fire({
      "title": "Team Sent to Bot",
      "text": "Your team has been sent to the bot for battle!",
      "icon": "success",
    });
  }

};


  const handleBattleBot = () => {
    Swal.fire({
      "title": "A battle has been initiated!",
      "text": "The bot will now select a team to battle against you!",
      "icon": "info",
      "confirmButtonText": "Let's Battle!",
    });
  }
  return (
    <section className="teambuilder">
      <Heading as="h1" size="lg" textAlign="center" mt={5} mb={5}>
        Team Builder
      </Heading>
      <Text>You can battle against the bot using your team or one of our custom teams!</Text>
      <input
        type="text"
        placeholder="Search for a Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
   {filteredPokemon ? (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {filteredPokemon.map((pokemon, index) => (
            <GridItem key={index} bg={Colors[pokemon.name]} p={4} borderRadius="md">
              <Text textTransform={'capitalize'}>{pokemon.name}</Text>
                
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
              <Button onClick={() => handleAddPokemon(pokemon)}>Add to Team</Button>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>No Pokémon found</Text>
      )}
      <Button onClick={sendTeamToBot}>Send Team to Bot</Button>
      <Divider />
      <Heading as="h2" size="md" textAlign="center" mt={5} mb={5}>
        Your Team
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {selectedPokemon.map((pokemon, index) => (
          <GridItem key={index} bg={Colors[pokemon.name]} p={4} borderRadius="md">
            <Text textTransform={'capitalize'}>{pokemon.name}</Text>
            <Text textTransform={'capitalize'}>{pokemon.types.type.name}</Text>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Button onClick={() => handleRemovePokemon(index)}>Remove from Team</Button>
          </GridItem>
        ))}
      </Grid>
      <Button onClick={handleBattleBot}>Battle Bot</Button>
    </section>
  );
}}
export default TeamBuilder;
// Compare this snippet from src/Components/TeamBuilder/TeamBuilder.js: