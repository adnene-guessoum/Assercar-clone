import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Link } from '@chakra-ui/react';

const InvestGridItem = ({ children, title, thumbnail, href }) => (
  <Box w="100%" align="center" mt={4} border="solid black" bg="#20202380">
    <Link href={href} target="_blank">
      <LinkBox cursor="pointer" mt={1}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          borderImage="solid red"
        />
        <LinkOverlay href={href} target="_blank" color="#670211">
          <Text mt={2} fontSize={22}>
            {title}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </Link>
    <Text fontSize={12} color="white">
      {children}
    </Text>
  </Box>
);

export default InvestGridItem;
