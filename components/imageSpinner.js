import Carousel from 'framer-motion-carousel';

import { Box } from '@chakra-ui/react';

const ImageSpinner = () => (
  <Box as="div" style={{ width: 235, height: 400, margin: '0 auto' }}>
    <Carousel>
      {[1, 2, 3, 4].map((item, i) => (
        <img
          draggable="false"
          src={`./images/carnet/CarnetServices${item}.png`}
          key={i}
          width="100%"
          alt=""
        />
      ))}
    </Carousel>
  </Box>
);

export default ImageSpinner;
