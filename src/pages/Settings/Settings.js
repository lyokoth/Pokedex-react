import React from 'react';
import Toggler from '../../Components/Navbar/Toggler/Toggler';
import { Heading, Text, Image, Card, MenuDivider, Switch } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';

export default function Settings() {

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;




  return (
    <div>
        <Heading as="h1" size="xl" textAlign="center" mt={10}>Settings</Heading>
        <Text textAlign="center" mt={5}>Customize your experience</Text>
        <Card>
            <Switch
                id="reduced-motion"
                colorScheme="blue.200"
                size="lg"
                onClick={() => {
                    if (reducedMotion) {
                        window.localStorage.setItem('reduced-motion', 'false');
                    } else {
                        window.localStorage.setItem('reduced-motion', 'true');
                    }
                }}
                
                isChecked={reducedMotion}>
            </Switch>

        </Card>
      
    </div>
  )
}
