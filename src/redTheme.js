
import { createTheme } from '@mui/material/styles';

const redTheme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // A strong red
    },
    secondary: {
      main: '#ffc107', // Amber for accents
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

const darkRedTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#e57373', // Lighter red for dark mode
      },
      secondary: {
        main: '#ffca28', // Lighter amber for dark mode
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

export { redTheme, darkRedTheme };
