/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from "@mui/material/styles";

interface ThemeReusable {
  colors: {
    background: string;
    white: string;
    dark: string;
    titleDark: string;
    error: string;
    purple: string;
    backdropBackground: string;
    shadow: string;
    black: string;
    brown: string;
    border: string;
    button: string;
  };
  fontSize: {
    largeLarge: string;
    large: string;
    mediumLargeLarge: string;
    mediumLarge: string;
    mediumMedium: string;
    medium: string;
    mediumSmall: string;
    small: string;
  };
  fontFamily: {
    oswald: string;
    inter: string;
  };
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeReusable {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends ThemeReusable {}
}

export const theme = createTheme({
  colors: {
    background: "#F6F5F2",
    white: "#FFFFFF",
    dark: "#868480",
    titleDark: "#242423",
    error: "#D8232A",
    purple: "#6A0322",
    backdropBackground: "#F6F5F280",
    shadow: "rgba(134, 132, 128, 0.15)",
    black: "#000000",
    brown: "#9E8058",
    border: "#F2F2F2",
    button: "#979797",
  },
  fontSize: {
    largeLarge: "32px",
    large: "26px",
    mediumLargeLarge: "22px",
    mediumLarge: "20px",
    mediumMedium: "18px",
    medium: "16px",
    mediumSmall: "14px",
    small: "12px",
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
  fontFamily: {
    oswald: "Oswald",
    inter: "Inter",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#6A0322",
          ":hover": {
            backgroundColor: "#6A0322",
          },
        },
      },
    },
  },
});
