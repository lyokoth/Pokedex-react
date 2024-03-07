import React, { useState, useEffect, useContext } from 'react';
import { Grid, Flex, GridItem,  Text, Spinner, } from '@chakra-ui/react';
import { Colors } from '../../Components/Routing/api';
import './PokeList.css';
import pokeball from '../../assets/pokeball-black.jpg';
import { useNavigate } from 'react-router-dom';
import PokedexContext  from '../../functions/Context';
import { fetchPokemon } from '../../Components/Routing/api';
import ScrollToTop from 'react-scroll-to-top';
// add sidebar for generation filter

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]); 
  const [search, setSearch] = useState('');
  const [ selectedType, setSelectedType ] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(false);

 
  const navigate = useNavigate();

  const {loading,
     setLoading,
     allPokemon,
     setAllPokemon,
        error,
        setError,
        setSinglePokemon,
    } = useContext(PokedexContext);

    useEffect(() => {
      const fetchKantoPokemon = async () => {
        setLoading(true);
        try {
          const data = await fetchPokemon(151, 0); // Fetch Kanto Pokemon
          const promises = data.results.map(async (pokemon) => {
            return await fetch(pokemon.url).then((res) => res.json());
          });
          const results = await Promise.all(promises);
          setAllPokemon(results);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
    
      fetchKantoPokemon();
    }, []); // Empty dependency array

    if (loading) {
      return <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="purple.500"
      size="xl"
      className="loadingSpinner"
      />
    }

 
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
    <div className="pokedex-container">
      <div className="pokedex-grid cursor-pointer" style={{ textTransform: 'capitalize' }}> 
        <span className="pokeball" style={{ backgroundImage: `url(${pokeball})` }}></span>
        {allPokemon.length  > 0 && (
          <Grid templateColumns="repeat(4, 1fr)" gap={4} className="">
            {allPokemon 
              .map((pokemon, index) => (
                <GridItem 
                key={index} 
                backgroundColor={Colors[pokemon.types[0].type.name]}
                borderRadius="10px" 
                p="20px" 
                border="2px solid black"
                className="grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10"
                onClick={() => handlePokemonClick(pokemon)}
                style={{cursor: 'pointer'}}
                >          
                    <h2 className="capitalize font-bold tracking-tighter md:text-lg text-sm text-white">{pokemon.name} 
                    </h2>
                    <h3>#{String(`${pokemon.id}`).padStart(3, "0")}</h3>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} className='pkdexsprites' />
                   <Flex align="center" justify="center" className="type-container">
                   <figcaption className='flex flex-col  justify-center items-center w-1/2'>
                    {pokemon.types && pokemon.types.map((type, i) => (
                      <Text key={i} 
                      backgroundColor={Colors[type.type.name]}
                       borderRadius={5} 
                       textAlign="center" 
                        padding="5px"
                        border='1px solid black'
                  
                       className='my-1 rounded-full md:text-base text-xs typeName'
                  peName
                      >{type.type.name}</Text>
                    ))}
                    </figcaption>
                </Flex>
                </GridItem>
              ))}
          </Grid>
        )}
      </div>
      <ScrollToTop smooth color="#f5f5f5" />
    </div>
  );
}

export default PokeList;
