import Head from 'next/head';
import Navbar from '../navbar.js';
import Footer from '../footer';
import { Box, Flex } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>assercar-clone</title>
      </Head>

      <Flex>
        <Navbar path={router.asPath} />

        <Flex direction="column">
          <Box pt={4} mb="50px">
            {children}
          </Box>

          <Footer />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Main;
