import React, {useState } from 'react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Text, Card} from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react';
import './RegistrationForm.css';
//import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';


const RegistrationForm = () => {

    const navigate = useNavigate();
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError(true);
            setFormError(true);
        }
        if (email === '') {
            setEmailError(true);
            setFormError(true);
        }
        if (username === '') {
            setUsernameError(true);
            setFormError(true);
        }
        if (confirmPassword === '') {
            setConfirmPasswordError(true);
            setFormError(true);
        }
        if (!formError) {
            setFormSuccess(true);
        }
        navigate('/login')
    }

    // account storage 



    return (
        <>
        <Card className="registration-form">
            <Text fontSize="2xl">Create an Account</Text>
        <form onSubmit={handleSubmit}>
            <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <FormErrorMessage>Username is required</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormErrorMessage>Email is required</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} isRequired/>
                <FormErrorMessage>A Password is required.</FormErrorMessage>
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} isRequired />
                <FormErrorMessage>Passwords do not match</FormErrorMessage>
            </FormControl>
            <Button type="submit"  disabled>Submit</Button>
        </form>
        </Card>
        <Footer />
        </>
    )
    };
    export default RegistrationForm;

