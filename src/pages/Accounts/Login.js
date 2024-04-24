import React from 'react'
import  {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Text, Card } from '@chakra-ui/react'
import { Input, Button } from '@chakra-ui/react'    
import { email, password } from './RegistrationForm';


const Login = () => {

    return(
        <>
        <Heading as="h1">Login</Heading>

    
           
        </>
    )
}
export default Login;