import React, { useState } from 'react';
import axios from 'axios';
// import SearchIcon from '@mui/icons-material/Search';
import './PokemonSearch.css';
import {  Input, Card, CardBody, Heading, Text, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { fetchPokemonData, fetchPokemonSpecies, Colors, StatColors } from '../Routing/api';


const PokemonSearch = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
 
    const fetchPokemonData = async () => {

        try {
            const { data } = await fetchPokemonData(pokemon);
            const speciesData = await fetchPokemonSpecies(pokemon);
            const color = Colors[data.types[0].type.name];
            const styleBg = {
                backgroundColor: `${color}`,
            };
            setPokemonData({ ...data, ...speciesData, styleBg });
        }
        catch (err) {
            console.error(err);
        }
    }
    if (pokemonData) {
        const { name, id, types, flavor_text_entries, stats, styleBg } = pokemonData;
        return (
            <section className="pokemon-card-container">
                <Card bg='blue.50' className="pokemon-card" style={styleBg}>
                    <CardBody className="pokemon-card-body">
                        <Stack>
                            <Heading size="lg">{name}</Heading>
                            <Text>#{id}</Text>
                            <Text>Type: {types[0].type.name}</Text>
                            <Text>{flavor_text_entries[0].flavor_text}</Text>
                        </Stack>
                        <Stack>
                            <Heading size="md">Base Stats:</Heading>
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-card" style={{ backgroundColor: StatColors[stat.stat.name] }}>
                                    <Text>{stat.stat.name}: {stat.base_stat}</Text>
                                </div>
                            ))}
                        </Stack>
                    </CardBody>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
                </Card>
            </section>
        )
    }
    return (
        <div>
            <div className="search">
                <Input
                    type="text"
                    onChange={(e) => setPokemon(e.target.value)}
                    placeholder="Search a Pokemon..."
                    value={pokemon}
                    w="50%"
                />
                <IconButton
                    onClick={fetchPokemonData}
                    icon={<SearchIcon />}
                />
            </div>
       
           
        </div>
    )
}
export default PokemonSearch;
        
      