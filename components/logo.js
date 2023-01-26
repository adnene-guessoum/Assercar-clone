import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const LogoContainer = styled.span`
  padding: 10 px;
  height: 100px;

  &:hover img {
    transform: scale(1.3);
  }
`;

const Logo = () => {
  const logoImg = '/images/logo.png';

  return (
    <Link legacyBehavior href="/">
      <LogoContainer>
        <Image src={logoImg} width={100} height={100} alt="logo assercar" />
      </LogoContainer>
    </Link>
  );
};

export default Logo;
