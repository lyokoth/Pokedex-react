import React, { useState, useEffect, useContext } from 'react';
import { Grid, Flex, GridItem, Heading, Text, Input, IconButton, Spinner } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Colors } from '../../Components/Routing/api';
import gridLogo from '../../assets/pokeball-white.png';
import './PokeList.css';
import pokeball from '../../assets/pokeball-black.jpg';
import { useNavigate } from 'react-router-dom';
import PokedexContext  from '../../functions/Context';
import Generation from './GenerationFilter/Generation';
// add sidebar for generation filter


const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [ selectedType, setSelectedType ] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedGeneration, setSelectedGeneration] = useState('');
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
 

  const filteredTypes = pokemon.filter((pokemon) => {
    if (selectedType === "") {
      return true;
    } else {
      return pokemon.types.some((type) => type.type.name === selectedType);
    }
  }).filter((pokemon) => {
    if (search === "") {
      return true;
    } else {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  


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
  
     <Heading size="lg" textAlign="center" mt="20px">Pokédex</Heading>
      <Flex justify="center" mt="20px">
        <Input
          placeholder="Search by Pokémon name, type, or id..."
          value={search}
          onChange={handleSearchChange}
          width={{ base: '80%', md: '50%' }}
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          onClick={handleSearchChange} // This should trigger the search action
        />
        <br />

       
    
      </Flex>

      <div className="pokedex-grid" style={{ textTransform: 'capitalize' }}>
       
        <span className="pokeball" style={{ backgroundImage: `url(${pokeball})` }}></span>
        
        {pokemon.length  > 0 && (
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
                backgroundColor={Colors[pokemon.types[0].type.name]}
                borderRadius="10px" 
                p="20px" 
            
                border="1px solid black" 
                onClick={() => handlePokemonClick(pokemon)}
                style={{cursor: 'pointer'}}
            
                >
                    <img src={gridLogo} alt="Pokemon Logo" />
                  <Flex direction="column" align="center">
                  
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pkdexsprites' />
                    <Heading size="lg" mt="10px" >{pokemon.name}</Heading>
                    <span size="lg">#{pokemon.id}</span>
                    {pokemon.types && pokemon.types.map((type, i) => (
                      <Text key={i} backgroundColor={Colors[type.type.name]} borderRadius={5} p={1} mt={2} border="2px solid black" textAlign="center" flexDirection={'row' }
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
