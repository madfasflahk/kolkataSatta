import React, { useRef } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { useGlobalSkills } from '../context/skillContext';
import Loader from './Loader/Loader';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

const ResultDisplay = ({ data }) => {
  const { isLoading } = useGlobalSkills();
  const tableContainerRef = useRef(null);

  const formatNumber = (number) => {
    if (number !== null && !isNaN(number)) {
      return parseInt(number).toString().padStart(2, '0');
    }
    return "";
  };

  const handleScroll = (direction) => {
    if (tableContainerRef.current) {
      if (direction === 'right') {
        tableContainerRef.current.scrollLeft += tableContainerRef.current.offsetWidth;
      } else {
        tableContainerRef.current.scrollLeft -= tableContainerRef.current.offsetWidth;
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const tableHeaders = [
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'delhiLuckyBazar', label: 'DELHI LUCKY BAZAR', minWidth: 170 },
    { id: 'disawer', label: 'DISAWER', minWidth: 100 },
    { id: 'faridabad', label: 'FARIDABAD', minWidth: 100 },
    { id: 'gaziyabad', label: 'GAZIYABAD', minWidth: 100 },
    { id: 'kolkataKing', label: 'KOLKATA KING', minWidth: 170 },
    { id: 'gali', label: 'GALI', minWidth: 100 },
    { id: 'delhiBazar', label: 'DELHI BAZAR', minWidth: 170 },
    { id: 'shreeGanesh', label: 'SHREE GANESH', minWidth: 170 },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
            <Button onClick={() => handleScroll('left')}><ArrowBackIosIcon /></Button>
            <Button onClick={() => handleScroll('right')}><ArrowForwardIosIcon /></Button>
        </Box>
      <TableContainer ref={tableContainerRef}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell
                    key={header.id}
                    align="center"
                    sx={{ minWidth: header.minWidth, bgcolor: 'primary.main', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}
                  >
                    {header.label}
                  </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.resultList && data.resultList.sort((a, b) => a.day - b.day).map((row, index) => (
              <motion.tr
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
              >
                <TableCell align="center" sx={{ fontSize: '1.1rem' ,color:"#0288d1"}}>
                  {`${String(row.day).padStart(2, '0')}-${String(data.month).padStart(2, '0')}`}
                </TableCell>
                {tableHeaders.slice(1).map((header) => (
                  <TableCell key={header.id} align="center" sx={{ fontSize: '1.1rem' }}
                    
                  
                  >
                    {formatNumber(row[header.id])}
                  </TableCell>
                ))}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ResultDisplay;