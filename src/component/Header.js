import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static ">
      <Toolbar className='container'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Kolkata Satta
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/">
          Satta Chart
        </Button>
        <Button color="inherit" component={Link} to="/">
          Satta King 2024
        </Button>
        <Button color="inherit" component={Link} to="/">
          Satta Leak
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
