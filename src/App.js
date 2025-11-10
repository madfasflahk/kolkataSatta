import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { redTheme } from './redTheme';
import AdminDashBoard from './adminDashBoard/AdminDashBoard';
import LoginForm from './component/LoginForm';

const App = () => {
  return (
    <ThemeProvider theme={redTheme}>
      <CssBaseline />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/userLogin" element={<LoginForm />} />
            <Route path="/" element={<AdminDashBoard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;