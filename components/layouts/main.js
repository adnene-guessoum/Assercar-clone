import Head from 'next/head';
import Navbar from '../navbar.js';
import Footer from '../footer';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>assercar-clone</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container w="100%" maxW="100vw" pt={4} mb="50px">
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Main;
