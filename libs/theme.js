import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    body: {
      bg: '#d5cdc4'
    }
  }
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },

  Link: {
    baseStyle: {
      color: 'red',
      textUnderlineOffset: 3
    }
  },

  Divider: {
    baseStyle: {
      backgroundColor: 'black'
    }
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
};

//base-fonts:

const colors = {
  glassTeal: '#88ccca'
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default theme;
