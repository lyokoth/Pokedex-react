import React from 'react';
import Male from '../../../../assets/male.png';
import PokedexContext from '../../../../functions/Context';
import { useContext } from 'react';
import Female from '../../../../assets/female.png';
import './Biology.css';
import { EggGroupColors } from '../../../Routing/api';
import { Card, CardBody, CardFooter, Spinner, Heading, Text, Stack } from '@chakra-ui/react';


const Biology = ({pokemon}) => {
  
  

    const inches = (pokemon.height * 3.93701).toFixed(0);
    const feet = Math.floor(Number(inches) / 12); 


   if (!pokemon) {
         return <Spinner color='purple.500' speed="0.65s" emptyColor='gray.200' size='xl' />;
   }

    const genderPercentage = pokemon.gender_rate !== -1
    ? (pokemon.gender_rate / 8) * 100
    : -1;
  


    return(
        <section className="biology-container">
            <Card className="biology-card">
                <CardBody>
                    <Heading as= "h1" className="bio-heading">Biology</Heading>
                    <Stack direction="row">
                        <p className='text-gray-400 font-medium mr-5'>Gender Rates:</p>
                    {genderPercentage === -1 ? (
                     'Genderless'
                    ) : (
                        <>
                            <figure className='flex items-center justify-center mx-3'>
                                <img
                                    className='w-5 h-5'
                                    src={Male}
                                    alt='Male symbol'
                                />
                                <figcaption className='pt-1.5 pl-2'>
                                    {100 - genderPercentage}%
                                </figcaption>
                            </figure>
                            <figure className='flex items-center justify-center mx-3'>
                                <img
                                    className='w-5 h-5'
                                    src={Female}
                                    alt='Female symbol'
                                />
                                <figcaption className='pt-1.5 pl-2'>
                                    {genderPercentage}%
                                </figcaption>
                            </figure>
                        </>
                    )}
                    </Stack>

                    <div className="bio-info">
                        <h2 className="egg-group">Egg Groups</h2> 
                        <div className="eggGroup">
                            {pokemon.egg_groups.map((group, index) => (
                                <span
                                    key={index}
                                    className="eggGroup"
                                    textTransform="capitalize"
                                    style={{
                                        backgroundColor: EggGroupColors[group.name],
                                    }}
                                >
                                    {group.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="egg-group-info">
                        <h2 className="egg-group">Egg Cycle</h2>
                        <div 
                        className="eggGroup"
                        style={{
                            backgroundColor: EggGroupColors[pokemon.egg_groups[0].name]
                        }}>{pokemon.egg_groups.map((group, i) => (
                            <p key={i}>{group.name}</p>
                        
))}
                    </div>
                    </div>

                    
                </CardBody>
                </Card>
           
                </section>
    );
}
export default Biology;
