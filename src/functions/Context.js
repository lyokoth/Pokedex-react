import { createContext, useState } from "react";
import { fetchPokemon, fetchPokemonData } from "../Components/Routing/api"

const PokedexContext = createContext();


const PokedexProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [pokemon, setPokemon ]= useState([]);
    const [singlePokemon, setSinglePokemon] = useState([]);
    const [about, setAbout] = useState([]);
    const [location, setLocation ] = useState([]);
    const [evolution, setEvolution] = useState([]);
    const [preEvolution, setPreEvolution] = useState([]);
    // const [initValue, setInitValue] = useState(0);
    // const [effortValue, setEffortValue] = useState(0);

    const getPokemon = async() => {
        setLoading(true);

        try {
            const data = await fetchPokemon(893, 0);
            const promises = data.results.map(async (pokemon) => {
                return await fetchPokemonData(pokemon.url)
            });
            const results = await Promise.all(promises);
            setPokemon(results);
            setSinglePokemon([]);
            //setTimeout(() => {
                setLoading(false);
           // }

        } catch (error) {
            setLoading(false);
            setError(true);

        }
    }; 

  
 
    const data = {
        loading,
        setLoading,
        error,
        setError,
        pokemon,
        getPokemon,
        setPokemon,
        singlePokemon,
        setSinglePokemon,
        about,
        setAbout,
        location,
        setLocation,
        evolution,
        setEvolution,
        preEvolution,
        setPreEvolution,
        // initValue,
        // getInitValue,
        // effortVlalue,
        // getEffortValue,
    };

    return (
        <PokedexContext.Provider value={data}>
            {children}
        </PokedexContext.Provider>
    );

};
export { PokedexProvider } ;
export default PokedexContext;