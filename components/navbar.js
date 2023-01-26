import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
} from '@chakra-ui/react';

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Link p={2} bg={'#FAF8F1'} color={'#FAF8F1'}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={'#20202380'}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/projets" path={path}>
            Qui sommes nous ?
          </LinkItem>

          <LinkItem href="/publications" path={path}>
            Le réseau
          </LinkItem>

          <LinkItem href="/tech" path={path}>
            Nos clients
          </LinkItem>

          <LinkItem href="/tech" path={path}>
            Nos partenaires
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
