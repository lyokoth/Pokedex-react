import PokedexContext from "../../../../functions/Context";
import { useContext } from "react";


const Sprites = () => {
    const {pokemon} = useContext(PokedexContext);
    const {front_default, back_default, front_shiny, back_shiny} = pokemon;

    return (
        <section className='sprites'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
        </section>
    );
}
export default Sprites;