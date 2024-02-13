import pokeLoader  from '../../assets/pokeLoad.gif';
import './Loader.css';

const Loader = () => {
    return (
        <figure className="loader">
            <img src={pokeLoader} alt="pokeLoader" className="pokeLoader"/>
            <figcaption className="loading">Loading...</figcaption>
        </figure>

    )
}
export default Loader;