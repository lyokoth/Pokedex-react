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

     const navigate = useNavigate();

     // parse url to get the evolution id 

        useEffect(() => {
            const fetchEvolution = async () => {
                try {
                    const res = await axios.get(evolution_chain.url);
                    const data = res.data;
                    console.log(data);
                    const evolution = data.chain.evolves_to.map(evolution => evolution.species.name);
                    const preEvolution = data.chain.evolves_from ? data.chain.evolves_from.species.name : evolution[0];
                    const finalEvolution = data.chain.evolves_to[0].evolves_to[0] ? data.chain.evolves_to[0].evolves_to[0].species.name : null;
                    setEvolution(evolution);
                    setFinalEvolution(finalEvolution);
              
    

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
        const {sprites, name, front_default, id, data} = evolution;
      
       
 
        return (
               <Card style={{border: '1px'}}>
                    <Stack direction="row" spacing={2}>
                        <Flex flexDirection="row" alignItems="center">
                        {evolution.map((evolution, index) => (
                        <div key={index}>
                             <img
                             
                             src={pokemon.sprites.front_default} 
                            
                             
                             alt={pokemon.name} />  
                            <Text 
                                className="evo-name"
                                key={index} 
                                textTransform={'capitalize'}
                                style={{ backgroundColor: Colors[evolution] }}>{pokemon.name}</Text>   
                                
                                 <ArrowRightIcon />
                       </div>
                      
                    
                        ))}
                      <div>
                     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <Text 
                            className="evo-name"
                            textTransform={'capitalize'}
                            style={{ backgroundColor: Colors[pokemon.name] }}>{evolution}</Text>

                        </div>
                        < ArrowRightIcon />
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
    
           