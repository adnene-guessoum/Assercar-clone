import { Flex, Link, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Flex direction="column">
      <Divider backgroundColor="black" />

      <Flex
        align="center"
        justify="center"
        fontSize="sm"
        color="black"
        p={2}
        h="40px"
        gap={4}
        ml="280px"
      >
        <Divider backgroundColor="black" orientation="vertical" />

        <Link
          color="black"
          href="https://www.assercar.fr/mentions_legales.php"
          isExternal
        >
          mentions légales
        </Link>

        <Divider backgroundColor="black" orientation="vertical" />

        <Link
          color="black"
          href="https://www.assercar.fr/utilisation.php"
          isExternal
        >
          Conditions d&apos;utilisation
        </Link>
        <Divider backgroundColor="black" orientation="vertical" />

        <Link
          color="black"
          href="https://www.assercar.fr/protection_donnees.php"
          isExternal
        >
          Protection des données
        </Link>
        <Divider backgroundColor="black" orientation="vertical" />

        <NextLink color="black" href="/contact">
          <Link color="black">Nous contacter</Link>
        </NextLink>

        <Divider backgroundColor="black" orientation="vertical" />
      </Flex>
    </Flex>
  );
};

export default Footer;
