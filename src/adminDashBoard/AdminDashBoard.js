import React, { useState } from 'react';
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Card, CardContent } from '@mui/material';
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

  return (
    <Box sx={{ flexGrow: 1, p: 2, backgroundColor: '#f4f6f8' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardContent>
              <List component="nav">
                {menuItems.map((item) => (
                  <ListItem key={item.key} disablePadding>
                    <ListItemButton
                      selected={option === item.key}
                      onClick={() => setOption(item.key)}
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Card>
            <CardContent>
              {renderComponent()}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashBoard;

