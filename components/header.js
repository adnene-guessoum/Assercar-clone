import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
	Image
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

const Header = props => {
  const { path } = props;

  return (
    <Flex
      position="fixed"
			align="center"
			justify="left"
      as="head"
      w="100%"
			h="150px"
			p={2}
      bg={'#20202380'}
      style={{ backdropFilter: 'blur(50px)' }}
      zIndex={1}
      {...props}
    >
            <Logo />
    </Flex>
  );
};

export default Header;
