import React from 'react';
import { useGlobalSkills } from '../context/skillContext';
import { Box, useTheme } from '@mui/material';

const Marquee = () => {
  const { movement } = useGlobalSkills();
  const theme = useTheme();

  return (
    <Box sx={{ width: '96%', mt: 2,mx: 'auto',rounded: 1, overflow: 'hidden' }}>
      {movement && movement.map((e, i) => (
        <Box key={i} sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          py: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          px: 9,
          mb: 0.5
        }}>
          <marquee direction={i % 2 === 1 ? "right" : "left"}>
            {e.Movement}
          </marquee>
        </Box>
      ))}
    </Box>
  );
};

export default Marquee;
