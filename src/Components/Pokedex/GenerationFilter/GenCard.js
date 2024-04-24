// Purpose: This file contains the Generation Card component which is used to display the generation cards in the GenerationFilter component.
import  PokedexContext  from '../../../functions/Context';
import { useContext } from 'react';
import { fetchPokemon, getData } from '../../Routing/api';
import { Box, Image, Grid, GridItem} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


// Generation Card component

const GenCard = ({ region, generation, limit, offset, img}) => {
  const { setAllPokemon, setLoading } = useContext(PokedexContext);

  


   
  const getGeneration = async () => {
    setLoading(true);
    try {
      const data = await fetchPokemon(limit, offset);
      console.log(data)
      const promises = data.results.map(async (pokemon) => {
        return await getData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setAllPokemon(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  const handleGenClick = () => {
    getGeneration();

    
  };


  return (
    
    <figure className='generationCard' onClick={handleGenClick}>
    <figcaption className='md:text-base text-xs text-center font-medium'>
        Generation {generation}
    </figcaption>
    <img
        className='generationGroup w-11/12 mx-auto'
        src={img}
        alt='Pokemon Generation'
        style={{width: '90%', height: '90%', }}
    />
</figure>

);
};




export default GenCard;
