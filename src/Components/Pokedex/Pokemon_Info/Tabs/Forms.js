import React, { useEffect } from 'react';
import { StatColors } from "../../../Routing/api";
import axios from 'axios';
import { Progress, Flex, Heading, Card, Stack, Text, Divider } from "@chakra-ui/react";

const Forms = ({pokemon}) => {
    useEffect(() => {
        const fetchForms = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
                const data = await res.json();
                console.log(data);
                const form_url = data.forms.map(form => form.url);
                console.log(form_url);

            } catch (error) {
                console.log(error);
            }
        };

        fetchForms();
    }, [pokemon]);


if (!pokemon.forms) {

 return null;
}; 

   
   

    return (
        <Flex direction={'column'}>
    <Stack direction={{base: "column", md: "column"}}>
       
        <Card className="stats" style={{textTransform: 'capitalize'}}>
            {pokemon.forms.map((form, i) => (
                <div key={form.name} className="stat-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ marginRight: '10px' }}>{pokemon.varieties[1].name}</Text>
                    {form.varieties && form.varieties.length > 1 && (

                        <Text style={{ marginRight: '10px' }}>Varieties: {form.varieties[1].name}</Text>
                        
                    )}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={`${form.name} official artwork`}  />
                </div>
            ))}
        </Card>
    </Stack>
</Flex>

    );
}
export default Forms;