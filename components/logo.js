import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Box, Container } from '@chakra-ui/react';

const LogoContainer = styled.div`
  height: 100px;
	display: flex;
	gap: 60px;
	margin-left: 25px;

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
        <Image src={logoImg} width={100} height={100} alt="logo assercar" />
    </Link>
		
				<Image src={motoImg} width={450} height={100} alt="slogan assercar" />
      </LogoContainer>
  );
};

export default Logo;
