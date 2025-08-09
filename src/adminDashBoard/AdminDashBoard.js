import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Card,
  CardContent,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FreeAd from './FreeAd';
import Notice from './Notice';
import Fact from './Fact';
import Movement from './Movement';
import Result from './Result';
import ImportantNote from './ImportantNote';
import ImportantFact from './ImportantFact';
import AlterNative from './AlterNative';

const AdminDashBoard = () => {
  const [option, setOption] = useState('freeAd');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const renderComponent = () => {
    switch (option) {
      case 'freeAd':
        return <FreeAd />;
      case 'Notice':
        return <Notice />;
      case 'importantNote':
        return <ImportantNote />;
      case 'importantFact':
        return <ImportantFact />;
      case 'alterNative':
        return <AlterNative />;
      case 'fact':
        return <Fact />;
      case 'movement':
        return <Movement />;
      case 'result':
        return <Result />;
      default:
        return <FreeAd />;
    }
  };

  const menuItems = [
    { key: 'freeAd', label: 'Free Ad' },
    { key: 'Notice', label: 'Notice' },
    { key: 'fact', label: 'Advertise' },
    { key: 'movement', label: 'Movement' },
    { key: 'importantNote', label: 'Important Note' },
    { key: 'importantFact', label: 'Important Fact' },
    { key: 'alterNative', label: 'Alternative SattaKing' },
    { key: 'result', label: 'Result' },
  ];

  const drawerContent = (
    <Box sx={{ width: 240 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              selected={option === item.key}
              onClick={() => {
                setOption(item.key);
                if (isMobile) setMobileOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Header */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </Drawer>

      {/* Drawer for desktop (top bar menu replaced, so no permanent drawer) */}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px',
          width: '100%',
        }}
      >
        <Card>
          <CardContent>{renderComponent()}</CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AdminDashBoard;
