import React, { useState, useEffect, useContext } from 'react';
import { Grid, Flex, GridItem, Heading, Text, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Colors } from '../../Components/Routing/api';
import gridLogo from '../../assets/pokeball-white.png';
import './PokeList.css';
import { useNavigate } from 'react-router-dom';
import PokedexContext  from '../../functions/Context';


const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const navigate = useNavigate();

  const {loading,
     setLoading,
        error,
        setError,
        singlePokemon,
        setSinglePokemon,
        setAbout,
        setLocation,
    } = useContext(PokedexContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10101`);
      const data = await response.json();
      const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
        const pokemonRecord = await fetch(pokemon.url);
        return pokemonRecord.json();
      }));
        data.results = pokemonData;
      setPokemon(data.results);
    }
    fetchPokemon();
  }, []);
 

  


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePokemonClick = async (pokemon) => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      const data = await response.json();
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
      const speciesData = await speciesResponse.json();
      setSinglePokemon({...data, ...speciesData});
      setSelectedPokemon(pokemon);
      navigate(`/pokemon/${pokemon.id}`);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <Flex justify="center" mt="20px">
        <Input
          placeholder="Search by Pokémon name..."
          value={search}
          onChange={handleSearchChange}
          width={{ base: '80%', md: '50%' }}
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          onClick={handleSearchChange} // This should trigger the search action
        />
      </Flex>
      <div className="pokedex-grid" style={{ textTransform: 'capitalize' }}>
        {pokemon.length > 0 && (
          <Grid templateColumns="repeat(3, 1fr)" gap={6} className="grid">
            {pokemon
              .filter((pokemon) => {
                if (search === "") {
                  return pokemon;
                } else if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
                  return pokemon;
                }
              })
              .map((pokemon, index) => (
                <GridItem key={index} 
                backgroundColor={'purple.100'} 
                borderRadius="10px" 
                p="20px" 
                border="1px solid black" 
                onClick={() => handlePokemonClick(pokemon)}
                style={{cursor: 'pointer'}}
                >
                    <img src={gridLogo} alt="Pokemon Logo" />
                  <Flex direction="column" align="center">
                  
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pkdexsprites' />
                    <Heading size="md" mt="10px">{pokemon.name}</Heading>
                    <Text>#{pokemon.id}</Text>
                    {pokemon.types && pokemon.types.map((type, i) => (
                      <Text key={i} backgroundColor={Colors[type.type.name]} borderRadius={5} p={1} mt={2} textAlign="center"
                      >{type.type.name}</Text>
                    ))}
                  </Flex>
                </GridItem>
              ))}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default PokeList;
