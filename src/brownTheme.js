
import { createTheme } from '@mui/material/styles';

const brownTheme = createTheme({
  palette: {
    primary: {
      main: '#795548', // Brown
    },
    secondary: {
      main: '#FFC107', // Amber
    },
    background: {
      default: '#f5f5f5', // A light grey background
      paper: '#ffffff',   // White for paper elements
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    // Custom font for lottery listings
    lotteryNumber: {
      fontFamily: '"Permanent Marker", cursive',
      fontSize: '1.2rem',
      fontWeight: 700,
    },
  },
});

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#A1887F', // Lighter Brown for dark mode
      },
      secondary: {
        main: '#FFCA28', // Lighter Amber for dark mode
      },
      background: {
        default: '#303030',
        paper: '#424242',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
      },
      // Custom font for lottery listings
      lotteryNumber: {
        fontFamily: '"Permanent Marker", cursive',
        fontSize: '1.2rem',
        fontWeight: 700,
      },
    },
  });

export { brownTheme, darkTheme };
