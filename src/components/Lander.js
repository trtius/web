import React from 'react';
import { Grid, VStack, Text, HStack, Link, Button } from '@chakra-ui/react';
import { HIGHLIGHT_COLOR } from '../theme';

function Lander() {
  return (
    <Grid minH="85vh">
      <VStack spacing={6} justifyContent={'center'} alignItems={'center'}>
        <Text
          as="h1"
          bgGradient="linear(to-l, #db34ff, #ffe313)"
          bgClip="text"
          fontSize="7xl"
          fontWeight="extrabold"
        >
          LexDAO
        </Text>
        <Text fontSize="3xl">Building the next generation of contracts</Text>
        <HStack spacing={3}>
          <Link
            href="https://lexdao.substack.com/p/how-do-you-join-lex-dao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button borderRadius="0.6rem" _hover={{ bg: HIGHLIGHT_COLOR }}>
              Join us!
            </Button>
          </Link>
          <Link
            href="https://calendly.com/lexdao/legal-engineering-consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button borderRadius="0.6rem" _hover={{ bg: HIGHLIGHT_COLOR }}>
              Book a Consultation
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Grid>
  );
}

export default Lander;
