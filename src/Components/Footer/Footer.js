import React from 'react';
import { Card, CardFooter, Text } from '@chakra-ui/react';
import github from '../../assets/icons8-github-48.png';

function Footer() {
  return (
    <>
    <section className="footer">
     <Card>
        <CardFooter>
          <Text>Created with 💗 by Lyn Okoth </Text>
          <a href="https://github.com/lyokoth"><img src={github} alt="github"></img></a>
        </CardFooter>
     </Card>
    </section>
    </>
  )
}

export default Footer
