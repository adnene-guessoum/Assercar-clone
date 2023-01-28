import Logo from './logo';
import NextLink from 'next/link';
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	List,
	ListItem,
	ListIcon,
	Text
} from '@chakra-ui/react';

import { ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, children }) => {
	return (
		<NextLink href={href} legacyBehavior passHref>
		<Link
		p={2}
		color= '#202023'
		>
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
		h="100%"
		bg='#20202380'
		p="10px"
		style={{ backdropFilter: 'blur(10px)' }}
		zIndex={1}
		{...props}
		>

		<Logo />


		<List fontSize="0.8em">

		<ListItem bg="#ffffff40">
		<ListIcon as={ArrowForwardIcon} />
		Qui sommes nous ?
		</ListItem>

		<List mb={2} pl={3}>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
					<LinkItem href="/societe" path={path}>
						La société
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/contact" path={path}>
            Nous Contacter
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/atouts" path={path}>
            Nos atouts
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/revue_presse" path={path}>
            Revue de presse
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/recrutement" path={path}>
            Recrutement
          </LinkItem>
			</ListItem>

		</List>
		
		<ListItem bg="#ffffff40">
		<ListIcon as={ArrowForwardIcon} />
		Le réseau
		</ListItem>

		<List mb={2} pl={3}>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
					<LinkItem href="/societe" path={path}>
						La société
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/contact" path={path}>
            Nous Contacter
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/atouts" path={path}>
            Nos atouts
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/revue_presse" path={path}>
            Revue de presse
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/recrutement" path={path}>
            Recrutement
          </LinkItem>
			</ListItem>

		</List>

		<ListItem bg="#ffffff40">
		<ListIcon as={ArrowForwardIcon} />
		Nos clients
		</ListItem>

		<List mb={2} pl={3}>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
					<LinkItem href="/societe" path={path}>
						La société
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/contact" path={path}>
            Nous Contacter
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/atouts" path={path}>
            Nos atouts
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/revue_presse" path={path}>
            Revue de presse
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/recrutement" path={path}>
            Recrutement
          </LinkItem>
			</ListItem>

		</List>

		<ListItem bg="#ffffff40">
		<ListIcon as={ArrowForwardIcon} />
		Nos partenaires
		</ListItem>

		<List mb={2} pl={3}>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
					<LinkItem href="/societe" path={path}>
						La société
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/contact" path={path}>
            Nous Contacter
          </LinkItem>
			</ListItem>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/atouts" path={path}>
            Nos atouts
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/revue_presse" path={path}>
            Revue de presse
          </LinkItem>
			</ListItem>

		<ListItem>
				<ListIcon as={ChevronRightIcon} />
          <LinkItem href="/recrutement" path={path}>
            Recrutement
          </LinkItem>
			</ListItem>

		</List>

		<ListItem bg="#ffffff40">
		<ListIcon as={ArrowForwardIcon} />
		Espace réservé
		</ListItem>

		<List mb={2} pl={3}>

			<ListItem>
				<ListIcon as={ChevronRightIcon} />
					<LinkItem href="/societe" path={path}>
						La société
          </LinkItem>
			</ListItem>

		</List>

		</List>     

		</Box>
	);
};

export default Navbar;
