import React, {useContext} from "react";
import PokeList from "./PokeList";
import PokedexContext from "../../functions/Context";
import { Grid, Spinner } from "@chakra-ui/react";


const PokedexList = () => {
    const {loading, getAllPokemon } = useContext(PokedexContext);

    if (loading) {
        return <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="purple.500"
            size="xl"
        />
    }

    if (getAllPokemon.length <= 0 || !getAllPokemon) { 
        return <div>No Pokémon found.</div>;
    }

    return (
        <section className="pokedexList">
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>

        {getAllPokemon.map((pokemon) => (
            <PokeList 
            key={pokemon.id} 
            pokemon={pokemon}
            id={pokemon.id}
            types={pokemon.types} />

        ))}
        </Grid>
        </section>
    );

};

export default PokedexList;