import React, { useState, useEffect, useContext } from 'react';
import { Grid, Flex, GridItem, Text, Spinner, Button, Input, Select } from '@chakra-ui/react';
import { Colors } from '../../Components/Routing/api';
import './PokeList.css';
import { useNavigate } from 'react-router-dom';
import PokedexContext from '../../functions/Context';
import { fetchPokemon } from '../../Components/Routing/api';
import ScrollToTop from 'react-scroll-to-top';
import { OptionsBar } from '../BaseComponents';

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [view, setView] = useState('artwork');

  const navigate = useNavigate();

  const {
    loading,
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
        const data = await fetchPokemon(151, 0);
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
  }, []);

  useEffect(() => {
    const filterPokemon = () => {
      let filtered = allPokemon;

      if (search !== '') {
        filtered = filtered.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
          pokemon.id.toString().includes(search.toLowerCase())
        );
      }

      if (selectedType !== '') {
        filtered = filtered.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === selectedType)
        );
      }

      setFilteredPokemon(filtered);
    };

    filterPokemon();
  }, [search, selectedType, allPokemon]);

  if (loading) {
    return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="purple.500" size="xl" className="loadingSpinner" />;
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handlePokemonClick = async (pokemon) => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      const data = await response.json();
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
      const speciesData = await speciesResponse.json();
      setSinglePokemon({ ...data, ...speciesData });
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
    <section>
      <OptionsBar>
        <Button onClick={handleSpriteToggle} className="sprite-toggle" colorScheme="purple" size="sm" variant="outline">
          Toggle View
        </Button>
        <Select placeholder="Search by Type" style={{ width: '60%', margin: '10px 0' }} onChange={(e) => handleTypeChange(e.target.value)}>
          <option value="">All Types</option>
          <option value="normal" style={{ backgroundColor: Colors.normal }}>Normal</option>
          <option value="fire" style={{ backgroundColor: Colors.fire }}>Fire</option>
          <option value="water" style={{ backgroundColor: Colors.water }}>Water</option>
          <option value="electric" style={{ backgroundColor: Colors.electric }}>Electric</option>
          <option value="grass" style={{ backgroundColor: Colors.grass }}>Grass</option>
          <option value="ice" style={{ backgroundColor: Colors.ice }}>Ice</option>
          <option value="fighting" style={{ backgroundColor: Colors.fighting }}>Fighting</option>
          <option value="poison" style={{ backgroundColor: Colors.poison }}>Poison</option>
          <option value="ground" style={{ backgroundColor: Colors.ground }}>Ground</option>
          <option value="flying" style={{ backgroundColor: Colors.flying }}>Flying</option>
          <option value="psychic" style={{ backgroundColor: Colors.psychic }}>Psychic</option>
          <option value="bug" style={{ backgroundColor: Colors.bug }}>Bug</option>
          <option value="rock" style={{ backgroundColor: Colors.rock }}>Rock</option>
          <option value="ghost" style={{ backgroundColor: Colors.ghost }}>Ghost</option>
          <option value="dragon" style={{ backgroundColor: Colors.dragon }}>Dragon</option>
          <option value="dark" style={{ backgroundColor: Colors.dark }}>Dark</option>
          <option value="steel" style={{ backgroundColor: Colors.steel }}>Steel</option>
          <option value="fairy" style={{ backgroundColor: Colors.fairy }}>Fairy</option>
        </Select>
      </OptionsBar>

      <Input
        type="text"
        placeholder="Search by Name or ID"
        value={search}
        style={{ width: '90%', margin: '10px 0' }}
        onChange={handleSearchChange}
        className="search-bar"
      />

      <section className="px-2 w-full mx-auto z-40 pt-4">
        <div style={{ textTransform: 'capitalize' }}>
          {filteredPokemon.length > 0 && (
            <Grid templateColumns="repeat(4, 1fr)" gap={4} className="grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10">
              {filteredPokemon.map((pokemon, index) => (
                <GridItem
                  key={index}
                  backgroundColor={Colors[pokemon.types[0].type.name]}
                  borderRadius="10px"
                  p="20px"
                  boxShadow="md"
                  className="grid md:grid-cols-5 xl:grid-cols-4 grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10"
                  onClick={() => handlePokemonClick(pokemon)}
                  style={{ cursor: 'pointer' }}
                >
                  <h2 className="capitalize font-bold tracking-tighter md:text-lg text-sm text-white">{pokemon.name}</h2>
                  <h3>#{String(`${pokemon.id}`).padStart(3, '0')}</h3>

                  {view === 'artwork' ? (
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} className="artwork" />
                  ) : (
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pkdexsprites" />
                  )}

                  <Flex align="center" justify="center" className="type-container">
                    <figcaption className="flex flex-row justify-center items-center w-1/2">
                      {pokemon.types.map((type, i) => (
                        <Text
                          key={i}
                          backgroundColor={Colors[type.type.name]}
                          flexAlign="row"
                          padding="5px"
                          borderRadius="20px"
                          className="my-1 rounded-full md:text-base text-xs typeName"
                        >
                          {type.type.name}
                        </Text>
                      ))}
                    </figcaption>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          )}
        </div>
      </section>
      <ScrollToTop smooth color={'inherit'} />
    </section>
  );
};

export default PokeList;
