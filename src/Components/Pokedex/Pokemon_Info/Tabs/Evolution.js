import React, { useEffect, useState } from 'react';
import { Colors } from '../../../Routing/api';
import axios from 'axios';
import {  Stack, Text, Image, Card, Flex} from "@chakra-ui/react";
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Evolution = ({ pokemon }) => {
     const {evolution_chain, type} = pokemon;
    
     const [evolution, setEvolution] = useState([]);
     const [preEvolution, setPreEvolution] = useState([]);
     const [finalEvolution, setFinalEvolution] = useState([]);
     const [sprites, setSprites] = useState({});

     const navigate = useNavigate();

     // parse url to get the evolution id 

        useEffect(() => {
            const fetchEvolution = async () => {
                try {
                    const res = await axios.get(evolution_chain.url);
                    const data = res.data;
                    console.log(data);
                    const evolution = data.chain.evolves_to.map(evolution => evolution.species.name);
                    const preEvolution = data.chain.species.name;
                    const finalEvolution = data.chain.evolves_to[0].evolves_to[0] ? data.chain.evolves_to[0].evolves_to[0].species.name : null;
                    setEvolution(evolution);
                    setFinalEvolution(finalEvolution);
                    setPreEvolution(preEvolution);


                    // fetch sprites 
                    const fetchSprites = async (id) => {
                        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                        return res.data.sprites;
                      };
              
                      const preEvolutionSprites = await fetchSprites(preEvolution);
                      const evolutionSprites = await Promise.all(evolution.map(e => fetchSprites(e)));
                      const finalEvolutionSprites = finalEvolution ? await fetchSprites(finalEvolution) : null;
              
                      setSprites({
                        preEvolution: preEvolutionSprites,
                        evolution: evolutionSprites,
                        finalEvolution: finalEvolutionSprites,
                      });
              
                      console.log(evolution);
                      console.log(preEvolution);
                      console.log(finalEvolution);
                    } catch (error) {
                      console.log(error);
                    }
                  };
              
   
            fetchEvolution();
        }, [evolution_chain]);

        if (!evolution) return <div>This Pokemon does not evolve.</div>

        if (evolution.length === 0) return <div>This Pokemon does not evolve.</div>

    
        
     
        const handleEvolutionClick = (name) => {
            navigate(`/pokemon/${id}`);
        }
        // defining the attributes for the evolved pokemon
        const { name, front_default, id, data} = evolution;
      

 
        return (
               <Card style={{border: '1px'}}>
                    <Stack direction="row" spacing={2}>
                        <Flex flexDirection="row" alignItems="center">
                        {evolution.map((evolution, index) => (
                        <div key={index}>
                             <Image
                             borderRadius={10}
                             circle={true}
                             src={pokemon.sprites.front_default} 
                             alt={pokemon.name} />  
                            <Text 
                                className="evo-name"
                                key={index} 
                                textTransform={'capitalize'}
                                style={{ backgroundColor: Colors[evolution]}}>{preEvolution}</Text>   
                                
                       </div>
                      
            
                    
                        ))}
                      <div>
                     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <Text 
                            className="evo-name"
                            textTransform={'capitalize'}
                            style={{ backgroundColor: Colors[pokemon.name] }}>{evolution}</Text>

                        </div>
                        <ArrowRightIcon />
                        </Flex>

                       
                 <div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <Text 
                    className="evo-name"
                    textTransform={'capitalize'}
                    style={{ backgroundColor: Colors[finalEvolution] }}>{finalEvolution}</Text>
                    </div>
                    </Stack>
                </Card>
                
        
                   
         
        );
}
export default Evolution;
    
           