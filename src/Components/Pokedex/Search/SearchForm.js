import {useContext, useState } from 'react';
import PokedexContext from '../../../functions/Context';
import { fetchPokemon, fetchPokemonLocation } from '../../Routing/api';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import './SearchForm.css';

const SearchForm = ({searchActive, setSearchActive}) => {
    const { setLoading, setSinglePokemon, setError, setLocation } = useContext(PokedexContext);
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState('');

    let id =  new Range(1, 10000);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const pokemonData = await fetchPokemon(
                pokemon.toLocaleLowerCase()
            );
            const location = await fetchPokemonLocation(
                pokemon.toLocaleLowerCase()
            );
            
           navigate(`/pokemon/${id}`)

            if (pokemonData !== undefined) {
                setSinglePokemon(pokemonData);
                setLocation(location);

                setError(false);
            } else {
                setError(true);
            }

            setSearchActive(false);
            setLoading(false);
        } catch (error) {
            setError(false);
            setLoading(true);
            setSinglePokemon([]);
        }
    };

    return (
        <section
        className={`${
            searchActive ? "searchSection active" : "searchSection"
        }`}
    >
        <form className='searchForm' onSubmit={handleSubmit}>
            <div className='relative w-11/12 flex items-center'>
                <span className='material-icons-outlined absolute left-3.5'>
                  <SearchIcon />
                </span>
                <input
                    type='search'
                    autoComplete='off'
                    placeholder='Search Pokémon'
                    className='pl-11 w-full pr-4 py-2 rounded-full outline-none border'
                    onChange={(e) => setPokemon(e.target.value)}
                />
            </div>
        </form>
    </section>
    );
};

export default SearchForm;
