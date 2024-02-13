import { useContext } from "react";
import { Link } from "react-router-dom";
import PokedexContext from "../../functions/Context";
import Pokeball from '../../assets/pokeball-white.png';

// import Pokedex from "../../Components/Pokedex/Pokedex";

import './Home.css';



const HomeNav = () => {
    const {setPokemon, setSinglePokemon } = useContext(PokedexContext);


    return(
        <section className="grid-container">
     
            <figure className="cardNavi">
                <Link 
                to="/pokedex"
                onClick={() => {
                    setPokemon();
                    setSinglePokemon([]);

                }}>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />
                <figcaption className="text-lg">Pokédex</figcaption>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />

                </Link>
            </figure>
      
            <figure className="cardNavi">
                <Link
                to="/teambuilder"
                onClick={() => {
                    setPokemon();
                    setSinglePokemon([]);
                }}>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />
                <figcaption className="text-lg">Team Builder</figcaption>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />
                </Link>
            </figure>
            <figure className="cardNavi">
                <Link
                to="/about"
                onClick={() => {
                    setPokemon();
                    setSinglePokemon([]);
                }}>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />
                <figcaption className="text-lg">About</figcaption>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />
                </Link>
            </figure>
            <figure className="cardNavi">
                <Link
                to="/natures"
                onClick={() => {
                    setPokemon();
                    setSinglePokemon([]);
                }}>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />
                <figcaption className="text-lg">Natures</figcaption>
                <img className='pokeball1' src={Pokeball} alt='pokeball' />
                </Link>
                </figure>
                <figure className="cardNavi">
                    <Link 
                    to="/types"
                    onClick={() => {
                        setPokemon();
                        setSinglePokemon([]);
                    }}>
                    <img className='pokeball1' src={Pokeball} alt='pokeball' />
                    <figcaption className="text-lg">Types</figcaption>
                    <img className='pokeball1' src={Pokeball} alt='pokeball' />
                    </Link>
                    </figure>
                 


        </section>
    )
}
export default HomeNav;

// footer navi maybe?