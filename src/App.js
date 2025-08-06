import React, { useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon for light mode
import { brownTheme, darkTheme } from './brownTheme';
import LandingPage from './pages/LandingPage';
import LoginForm from './component/LoginForm';
import AdminDashBoard from './adminDashBoard/AdminDashBoard';
import Header from './component/Header'; // Import Header
import Footer from './pages/Footer';
import YearlyData from './pages/YearlyData';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo(() => (isDarkMode ? darkTheme : brownTheme), [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        sx={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1300,
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        onClick={toggleTheme}
        color="inherit"
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <BrowserRouter>
        <Header />
        <div> {/* Main content container */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:year" element={<YearlyData />} />
            <Route path="/userLogin" element={<LoginForm />} />
            <Route path="/adminDashBoard" element={<AdminDashBoard />} />
          </Routes>
        </div>
        <Footer /> {/* Render Footer inside BrowserRouter */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;