import React, { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import MenuBtn from "../Search/Menu/MenuBtn";
import { Heading, Box, Flex } from "@chakra-ui/react";
// import SearchForm from "./SearchForm";
import MenuListBtn from "./Menu/MenuListBtn";



const Header = ({ searchGeneration, setSearchGeneration, generation, searchActive, setSearchActive}) => {
    const paddingStyle = {
        padding: "68px 38px 0",
    };
    const regionName = generation === "Kanto" ? "Kanto" : generation === "Johto" ? "Johto" : generation === "Hoenn" ? "Hoenn" : generation === "Sinnoh" ? "Sinnoh" : generation === "Unova" ? "Unova" : generation === "Kalos" ? "Kalos" : generation === "Alola" ? "Alola" : generation === "Galar" ? "Galar" : generation === "Paldea" ? "Paldea" : generation === "All Regions";

    return (
        <Box as="header" className='sticky top-0 z-20 pb-2'>
        <Flex 
           as="div"
           alignItems="center"
              justifyContent="space-between"
            style={paddingStyle}
        >
            <Link to='/'>
                <span className='material-icons-outlined'>
                    <ArrowBackIcon 
                    boxSize={10}
                    />

                </span>
            </Link>
           
            <MenuBtn    
                setSearchGeneration={setSearchGeneration}
                searchGeneration={searchGeneration}
                
            />
           
        </Flex>

      
        <Flex justifyContent="space-between" alignItems="center">
        <Heading as='h1' fontSize="3xl" fontWeight="bold" pl={[4, 16]} py={5}>
           {regionName} Pokédex 
            </Heading>
            
            {/* <Pagination /> */}
        </Flex>
    </Box>
    )
}
export default Header;
