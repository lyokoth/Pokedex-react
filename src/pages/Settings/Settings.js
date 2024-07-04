import React from 'react';
import Toggler from '../../Components/Navbar/Toggler/Toggler';
import { Heading, Text, Image, Card, MenuDivider, Switch } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Menu } from '@mui/material-next';

export default function Settings() {

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  
    // TODO: Add a switch to toggle color mode for accessibility

  return (
    <div>
        <Heading as="h1" size="xl" textAlign="center" mt={10}>Settings</Heading>
        <Text textAlign="center" mt={5}>Customize your experience</Text>
        <Card>
 
         
        </Card>
      
      
    </div>
  )
}
