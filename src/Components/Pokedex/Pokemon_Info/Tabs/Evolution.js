import { useContext, useState, useEffect } from "react";
import { Flex, Stack, Card, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { ArrowBackIosTwoTone } from "@mui/icons-material";

const Evolution = ({ pokemon }) => {
 
    useEffect(() => {
        const fetchEvolution = async () => {
            try {
                const evol_response = await axios.get(`https://pokeapi/v2/pokemon-species/${pokemon.id}`);
                const evol_data = evol_response.data;
                const evol_chain_url = evol_data.evolution_chain.url;
                console.log(evol_chain_url);
        
                const evol_chain_response = await axios.get(evol_chain_url);
           
                const evol_chain_data = evol_chain_response.data;
        
                const chain = evol_chain_data.chain;
        
                const processChain = (chain) => {
                    console.log("Species:", chain.species);
                    chain.evolves_to.forEach(evolves_to => {
                        console.log("Evolution Details:", evolves_to.evolution_details);
                        processChain(evolves_to);
                    });
                };
        
                processChain(chain);
        
            } catch (error) {
                console.log(error);
            }
        } 
        fetchEvolution();
    }
    , [pokemon]);


return (
    <>
   
    <Text>{pokemon.evolution_chain.url}</Text>
    <Flex direction={'column'}>
        <Stack direction={{base: "column", md: "column"}}>
            <Card className="stats" style={{textTransform: 'capitalize'}}>
                <Text>Evolution Chain:</Text>
                {pokemon.evolution_chain.url ? (
                    <Spinner color='purple.500' speed="0.65s" emptyColor='gray.200' size='xl' />
                ) : (
                    <Text>Evolution Chain not available</Text>
                ) }
            </Card>
        </Stack>
    </Flex>
    
    
</>
);
}
export default Evolution;



