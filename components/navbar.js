import Logo from './logo';
import NextLink from 'next/link';
import { Box, Link, List, ListItem, ListIcon, Divider } from '@chakra-ui/react';

import { ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, children }) => {
  return (
    <ListItem>
      <ListIcon as={ChevronRightIcon} />
      <NextLink href={href} legacyBehavior passHref>
        <Link p={2} color="#FAF9F6">
          {children}
        </Link>
      </NextLink>
      <Divider m={1} bg="black" />
    </ListItem>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      h="100%"
      bg="#20202380"
      p="10px"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'red',
          borderRadius: '24px'
        }
      }}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Logo />

      <List fontSize="0.8em">
        <ListItem bg="#ffffff40" color="#313639" fontWeight="bold">
          <ListIcon as={ArrowForwardIcon} />
          Qui sommes nous ?
        </ListItem>

        <List mb={2} pl={3}>
          <LinkItem href="/" path={path}>
            Accueil
          </LinkItem>

          <LinkItem href="/societe" path={path}>
            La société
          </LinkItem>

          <LinkItem href="/contact" path={path}>
            Nous Contacter
          </LinkItem>

          <LinkItem href="/atouts" path={path}>
            Nos atouts
          </LinkItem>

          <LinkItem href="/revue_presse" path={path}>
            Revue de presse
          </LinkItem>

          <LinkItem href="/recrutement" path={path}>
            Recrutement
          </LinkItem>
        </List>

        <ListItem bg="#ffffff40" color="#313639" fontWeight="bold">
          <ListIcon as={ArrowForwardIcon} />
          Le réseau
        </ListItem>

        <List mb={2} pl={3}>
          <LinkItem href="/convention" path={path}>
            La convention
          </LinkItem>

          <LinkItem href="/services" path={path}>
            Les services
          </LinkItem>

          <LinkItem href="/reparateurs" path={path}>
            Les réparateurs
          </LinkItem>

          <LinkItem href="/couverture_geographique" path={path}>
            Couverture géographique
          </LinkItem>
        </List>

        <ListItem bg="#ffffff40" color="#313639" fontWeight="bold">
          <ListIcon as={ArrowForwardIcon} />
          Nos clients
        </ListItem>

        <List mb={2} pl={3}>
          <LinkItem href="/assureur" path={path}>
            Assureurs
          </LinkItem>

          <LinkItem href="/courtier" path={path}>
            Gestionnaire de flottes
          </LinkItem>
        </List>

        <ListItem bg="#ffffff40" color="#313639" fontWeight="bold">
          <ListIcon as={ArrowForwardIcon} />
          Nos partenaires
        </ListItem>

        <List mb={2} pl={3}>
          <LinkItem href="/expertise" path={path}>
            Expertise
          </LinkItem>

          <LinkItem href="/cartographie" path={path}>
            Cartographie
          </LinkItem>

          <LinkItem href="/assistance" path={path}>
            Assistance
          </LinkItem>
        </List>

        <ListItem bg="red" fontWeight="bold">
          <ListIcon as={ArrowForwardIcon} />
          Espace réservé
        </ListItem>

        <List pl={3}>
          <LinkItem href="/identification" path={path}>
            Connexion
          </LinkItem>
        </List>
      </List>
    </Box>
  );
};

export default Navbar;
