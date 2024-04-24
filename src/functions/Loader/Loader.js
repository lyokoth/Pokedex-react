import { SpinnerIcon } from "@chakra-ui/icons";



const Loader = () => {
    return (
       <SpinnerIcon 
         color='purple.500'
            speed="0.65s"
            emptyColor='gray.200'
            size='xl'
         />

    )
}
export default Loader;