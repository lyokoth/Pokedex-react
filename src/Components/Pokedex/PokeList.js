import React, { useState, useEffect, useContext } from 'react';
import { Grid, Flex, GridItem,  Text, Spinner, Button, Checkbox, Input } from '@chakra-ui/react';
import { Colors } from '../../Components/Routing/api';
import './PokeList.css';
import pokeball from '../../assets/pokeball-black.jpg';
import { useNavigate } from 'react-router-dom';
import PokedexContext  from '../../functions/Context';
import { fetchPokemon } from '../../Components/Routing/api';
import ScrollToTop from 'react-scroll-to-top';
//import SearchBar from './Search/SearchForm.js';
import {Switch}  from '@chakra-ui/react';
// add sidebar for generation filter
import RandomPokeList from './RandomPokeList';

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]); 
  const [search, setSearch] = useState('');
  const [ selectedType, setSelectedType ] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(false);
  const [type, setType] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [motion, setMotion] = useState(false);
  const [view, setView] = useState('artwork');

 
  const navigate = useNavigate();

  const {loading,
     setLoading,
     allPokemon,
     setAllPokemon,
        error,
        setError,
        setSinglePokemon,
    } = useContext(PokedexContext);

    //  initial fetch
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
   
    useEffect(() => {
      if (search === '') {
          setFilteredPokemon(allPokemon);
      } else {
          const filtered = allPokemon.filter((pokemon) => {
              // Filter logic here based on search term
              return pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.id.toString().includes(search.toLowerCase());
          });
          setFilteredPokemon(filtered);
      }
  }, [search, allPokemon]);
     
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

 const handleTypeChange = (type) => {
    setSelectedType(type);
    setType(type);
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


  const handleSpriteToggle = () => {
    setView(view === 'artwork' ? 'sprites' : 'artwork');
  };

  return (
    <section className='px-2 w-full mx-auto z-40 pt-4'>
     
      <Checkbox onClick={handleSpriteToggle}> 
           {view === 'artwork' ? 'View Sprites' : 'View Artwork'}
             </Checkbox>


             <Input 
             type="text"
             placeholder="Search by Pokemon or ID"
             value={search}
             style={{width: '90%', margin: '10px 0'}}
              onChange={handleSearchChange}
              className="search-bar"
             
              />
      

   
      <div style={{ textTransform: 'capitalize' }}> 
    
        {filteredPokemon.length  > 0 && (
          <Grid templateColumns="repeat(4, 1fr)" gap={4} className="pokemon-grid-card">
            {filteredPokemon
            .filter(pokemon => selectedType ? pokemon.types.some(type => type.type.name === selectedType) : true)
              .map((pokemon, index) => (
                <GridItem 
                key={index} 
                backgroundColor={Colors[pokemon.types[0].type.name]}
                borderRadius="10px" 
                p="20px" 
                boxShadow="md"
                className="grid md:grid-cols-5 xl:grid-cols-4 grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10"
                onClick={() => handlePokemonClick(pokemon)}
                style={{cursor: 'pointer'}}
                >          
                    <h2 className="capitalize font-bold tracking-tighter md:text-lg text-sm text-white">{pokemon.name} 
                    </h2>
                    <h3>#{String(`${pokemon.id}`).padStart(3, "0")}</h3>

                    {view === 'artwork' ? (
                   <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} className='artwork' />
                    ) : (
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pkdexsprites' />
                       )}
                   
                   
                   <Flex align="center" justify="center" className="type-container">
                   <figcaption className='flex flex-row justify-center items-center w-1/2'>
                    {pokemon.types && pokemon.types.map((type, i) => (
                      <Text key={i} 
                      backgroundColor={Colors[type.type.name]}
                       flexAlign="row" 
                        padding="5px"
                       borderRadius="20px"
                       className='my-1 rounded-full md:text-base text-xs typeName'
                  peName
                      >{type.type.name}
                      </Text>
                    ))}
                    </figcaption>
                </Flex>
                </GridItem> 
              ))}
          </Grid>
        )}
      </div>
      <ScrollToTop smooth color={'inherit'} />  
    </section>
  );
 }

export default PokeList;
