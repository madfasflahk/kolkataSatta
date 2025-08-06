import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 4,
      }}
      

    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Kolkata Satta
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          Your trusted source for Satta King results and charts.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            About
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Disclaimer
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Sitemap
          </Link>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://kolkatasattapro.in/">
            Kolkata Satta
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;