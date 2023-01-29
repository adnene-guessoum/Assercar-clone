import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const LogoContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px;
  margin-top: 33px;

  &:hover img {
    transform: scale(1.2);
  }
`;

const Logo = () => {
  const logoImg = '/images/logo.png';

  return (
    <LogoContainer>
      <Link legacyBehavior href="/">
        <Image src={logoImg} width={150} height={150} alt="logo assercar" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
