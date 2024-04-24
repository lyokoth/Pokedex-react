import React from "react";

import {Text, Image, Heading, Button} from '@chakra-ui/react';
import substitute from '../../assets/Substitute.png';
import { Link } from "react-router-dom";
//import GuessingGame from '../../Components/GuessingGame/GuessingGame';

// import HomeNav from "../../Components/Home/HomeNav";
const ComingSoon = () => {
    
    return (
        <div style={{marginTop: '50px'}}>
            <Image align="center" src={substitute} alt="pokeball" style={{marginLeft: '350px'}} />
            <Heading as="h1" size="xl" textAlign="center" mt={10}>Not Found</Heading>
            <Text textAlign="center" mt={5}>We are working on this feature and it will be available soon. Please check back later!</Text>
            <Text textAlign="center" mt={5}>In the meantime, enjoy our other pages!</Text>
            
            
   
           
           <Button><Link to="/">Back to Home</Link></Button>


        </div>
    )

}
export default ComingSoon;