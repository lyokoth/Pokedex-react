import React from 'react';
import './About.css';
import  logo  from '../../assets/icons8-pokeball-64.png';
import { Heading, Flex, Image, Text } from '@chakra-ui/react';
export function About(){


    return (
        <Flex justify="center" align="center">
        <section className="about">
    
              <div className="about-container">
                
                <Heading as = "h1" size="lg" ml="2" >About</Heading>
              

                <Text className="about-text">
                    Welcome to the Pokédex! An app created to help trainers learn more about the Pokémon they love and to help them build their dream team!
                    <br />

                    </Text>
           </div>

        </section>
        </Flex>
    )

}