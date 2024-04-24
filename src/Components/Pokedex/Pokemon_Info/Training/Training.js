import { useContext } from "react";
import PokedexContext from "../../../../functions/Context";
import { Heading, Text } from "@chakra-ui/react";

const Training = ({pokemon}) => {

 const {base_experience, base_happiness, capture_rate, growth_rate} = pokemon;
    

    return (
        <section className='mt-3 text-base'>
        <Heading as="h1" className='flex flex-start'>Training</Heading>
     <div className='flex justify-between'>
            <Text>Base Experience {base_experience}</Text>
 
            <p>Base Happiness: {base_happiness}</p>
          
            <Text>Capture Rate: {capture_rate} 
            ({((capture_rate / 255) * 100).toFixed(1)} %)</Text> 
            <Text>Growth Rate: {growth_rate.name}</Text>
            </div>
    </section>
);
};

export default Training;