/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles';

interface ThemeReusable {
  colors: {
    background: string;
    white: string;
    dark: string;
    titleDark: string;
    error: string;
    purple: string;
    backdropBackground: string;
  };
  fontSize: {
    large: string;
    mediumLarge: string;
    medium: string;
    mediumSmall: string;
    small: string;
  };
  fontFamily: {
    oswald: string;
    inter: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme extends ThemeReusable {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends ThemeReusable {}
}

export const theme = createTheme({
  colors: {
    background: '#F6F5F2',
    white: '#FFFFFF',
    dark: '#868480',
    titleDark: '#242423',
    error: '#D8232A',
    purple: '#6A0322',
    backdropBackground: '#F6F5F280',
  },
  fontSize: {
    large: '32px',
    mediumLarge: '20px',
    medium: '16px',
    mediumSmall: '14px',
    small: '12px',
  },
  palette: {
    primary: {
      main: '#000000',
    },
  },
  fontFamily: {
    oswald: 'Oswald',
    inter: 'Inter',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#6A0322',
          ':hover': {
            backgroundColor: '#6A0322',
          },
        },
      },
    },
  },
});
