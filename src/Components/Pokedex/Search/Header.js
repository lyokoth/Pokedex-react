import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import MenuBtn from "../Search/Menu/MenuBtn";
import { Heading, Box, Flex } from "@chakra-ui/react";



const Header = ({ setSearchGeneration, searchGeneration, name}) => {
    const paddingStyle = {
        padding: "68px 38px 0",
    };


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
            {name} Pokedex 
            </Heading>
            
            {/* <Pagination /> */}
        </Flex>
    </Box>
    )
}
export default Header;
