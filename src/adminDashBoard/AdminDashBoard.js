import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import {
  AddCircleOutline, 
  NotificationsActive, 
  Announcement, 
  TrackChanges, 
  Note, 
  Verified, 
  CompareArrows, 
  CheckCircle
} from '@mui/icons-material';
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
    { key: 'freeAd', label: 'Free Ad', icon: <AddCircleOutline /> },
    { key: 'Notice', label: 'Notice', icon: <NotificationsActive /> },
    { key: 'fact', label: 'Advertise', icon: <Announcement /> },
    { key: 'movement', label: 'Movement', icon: <TrackChanges /> },
    { key: 'importantNote', label: 'Important Note', icon: <Note /> },
    { key: 'importantFact', label: 'Important Fact', icon: <Verified /> },
    { key: 'alterNative', label: 'Alternative SattaKing', icon: <CompareArrows /> },
    { key: 'result', label: 'Result', icon: <CheckCircle /> },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 2,
        }}
      >
        <Grid container spacing={3}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.key}>
              <Paper 
                elevation={3} 
                sx={{
                  p: 2, 
                  textAlign: 'center', 
                  cursor: 'pointer',
                  backgroundColor: option === item.key ? 'primary.main' : 'background.paper',
                  color: option === item.key ? 'white' : 'inherit',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                  }
                }}
                onClick={() => setOption(item.key)}
              >
                {item.icon}
                <Typography>{item.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Card sx={{ mt: 3 }}>
          <CardContent>{renderComponent()}</CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AdminDashBoard;
