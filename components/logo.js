import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Box, Container } from '@chakra-ui/react';

const LogoContainer = styled.div`
  height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
  margin-top: 44px;
	margin-bottom: 44px;

  &:hover img {
    transform: scale(1.2);
  }
`;

const Logo = () => {
  const logoImg = '/images/logo.png';
	const motoImg = '/images/moto.png';

  return (
     <LogoContainer>
    <Link legacyBehavior href="/">
        <Image src={logoImg} width={150} height={150} alt="logo assercar" />
    </Link>
		</LogoContainer>
  );
};

export default Logo;
