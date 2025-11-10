import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  TextField,
  Box,
  Paper,
  List,
  ListItem,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGlobalSkills } from '../context/skillContext';
import { monthNames } from '../staticData/MonthArray';
import Header from '../component/Header';
import Marquee from '../component/Marque';
import DigitalClock from '../component/DegitalClock';
import HourglassLoader from '../component/Loader/Lodertwo';
import ResultDisplay from '../component/ResultDisplay';
import YearMonthSelector from '../component/YearMonthSelector';
import NoticeBoard from '../component/NoticeBoard';
import SattaImportantNote from '../component/SattaImportantNote';

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { isLoading, freeAd, currentMonthChart, currentDayChart, updatedAdArray, importantFact, alterNative } = useGlobalSkills();
  const [resultLoad, setResultLoad] = useState(false);
  const [searchDate, setSearchDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });
  const [years, setYears] = useState(new Date().getFullYear().toString());

  const handleDateChange = async (year, month) => {
    setSearchDate({ year, month });
    setResultLoad(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}result?year=${year}&month=${month}`);
      if (res.status === 200) {
        setResultLoad(false);
        updatedAdArray(res.data, 'CHART_CURRENT_MONTH');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleDateChange(new Date().getFullYear(), new Date().getMonth() + 1);
  }, []);

  const formatNumber = (number) => {
    if (number !== null) {
      const parsedNumber = parseInt(number);
      return parsedNumber.toString().padStart(2, '0');
    }
    return '';
  };

  const handleYearChange = (event) => {
    setYears(event.target.value);
  };

  // Theme-based styles
  const styles = {
    highlightCard: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      textAlign: 'center',
      boxShadow: theme.shadows[10],
      borderRadius: 2,
      my: 3,
      borderLeft: '4px solid red'
    },
    titleCard: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      textAlign: 'center',
      boxShadow: theme.shadows[6],
      my: 3
    },
    resultCard: {
      textAlign: 'center',
      boxShadow: theme.shadows[4],
      borderRadius: 2,
      my: 3,
      backgroundColor: theme.palette.background.paper
    },
    dateHeader: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      py: 1,
      mb: 3,
      borderRadius: 1
    },
    yearButton: (color) => ({
      mb: 2,
      py: 2,
      fontWeight: 'bold',
      background: theme.palette.mode === 'dark' 
        ? `linear-gradient(135deg, ${color[700]} 0%, ${color[900]} 100%)`
        : `linear-gradient(135deg, ${color[500]} 0%, ${color[700]} 100%)`,
      '&:hover': {
        boxShadow: theme.shadows[6]
      }
    }),
    factCard: (color) => ({
      my: 4,
      p: 3,
      boxShadow: theme.shadows[3],
      borderLeft: `4px solid ${theme.palette[color].main}`,
      backgroundColor: theme.palette.background.paper
    })
  };
  
  return (
    <>
     
      <Marquee />
      <Container maxWidth="lg">
        {/* Main Highlight Card */}
        

        {/* Free Ads Grid */}
        <Grid container spacing={3} sx={{ my: 3 }}>
          {freeAd && freeAd.map((e) => (
            <Grid item xs={12} md={6} key={e._id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s',
                backgroundColor: theme.palette.background.paper,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6]
                }
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>{e.title}</Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>{e.content}</Typography>
                  <Typography variant="h5" color="secondary" sx={{ fontWeight: 'bold' }}>{e.aboutFees}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>{e.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Satta King Title Card */}
        <Card sx={styles.titleCard}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>SATTA-KING-FIXED-NO.IN</Typography>
          </CardContent>
        </Card>

        {/* Today's Results Card */}
        <Card sx={styles.resultCard}>
          <CardContent>
            <Box sx={styles.dateHeader}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {new Date().getDate()} {monthNames[new Date().getMonth()]} {new Date().getFullYear()}
              </Typography>
              <DigitalClock />
            </Box>
            
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>Satta King Live Result Today</Typography>
            
            {currentDayChart && currentDayChart.result && (
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {Object.entries(currentDayChart.result).map(([key, value]) => (
                  value !== null && (
                    <Grid item xs={6} sm={4} md={2} key={key}>
                      <Paper elevation={3} sx={{ 
                        p: 2, 
                        borderRadius: 2,
                        backgroundColor: theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100]
                      }}>
                        <Typography variant="subtitle1" color="textSecondary">
                          {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        </Typography>
                        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                          {formatNumber(value)}
                        </Typography>
                      </Paper>
                    </Grid>
                  )
                ))}
              </Grid>
            )}
          </CardContent>
        </Card>

        {/* Monthly Records Section */}
        <Card sx={{ 
          my: 3, 
          boxShadow: theme.shadows[4],
          backgroundColor: theme.palette.background.paper
        }}>
          <CardContent sx={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 2, 
            backgroundColor: theme.palette.warning[theme.palette.mode === 'dark' ? 800 : 100],
            py: 3
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              SATTA KING {monthNames[parseInt(searchDate.month) - 1]} RECORD CHART {searchDate.year}
            </Typography>
            <YearMonthSelector onDateChange={handleDateChange} />
          </CardContent>
          {resultLoad ? (
            <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
              <HourglassLoader />
            </Box>
          ) : (
            <ResultDisplay data={currentMonthChart} />
          )}
        </Card>

        {/* Year Navigation Buttons */}
        <Grid container spacing={2} sx={{ my: 4 }}>
          <Grid item xs={12} md={6} sx={{ mx: 'auto' }}>
            <Button 
              fullWidth 
              variant="contained" 
              size="large"
              sx={styles.yearButton('green')} 
              onClick={() => navigate('/2024')}
            >
              SATTA KING RECORD CHART 2024
            </Button>
            <Button 
              fullWidth 
              variant="contained" 
              size="large"
              sx={styles.yearButton('blue')} 
              onClick={() => navigate('/2023')}
            >
              SATTA KING RECORD CHART 2023
            </Button>
            <Button 
              fullWidth 
              variant="contained" 
              size="large"
              sx={styles.yearButton('orange')} 
              onClick={() => navigate('/2022')}
            >
              SATTA KING RECORD CHART 2022
            </Button>
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              alignItems: 'center',
              mt: 2
            }}>
              <TextField
                type="number"
                value={years}
                onChange={handleYearChange}
                variant="outlined"
                size="small"
                label="Enter Year"
                fullWidth
                sx={{ flexGrow: 1 }}
              />
              <Button 
                variant="contained" 
                size="large"
                sx={styles.yearButton('purple')}
                onClick={() => navigate(`/${years}`)}
              >
                Go
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Notice Board and Important Notes */}
        <Box sx={{ my: 4 }}>
          <NoticeBoard />
        </Box>
        
        <Box sx={{ my: 4 }}>
          <SattaImportantNote />
        </Box>

        {/* Important Facts Section */}
        <Card sx={styles.factCard('error')}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Important Facts about Satta King game
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" sx={{ mb: 3 }}>
            Satta king game is a popular gambling game, that originated in India. Here are some important aspects of this game.
          </Typography>
          <List dense>
            {importantFact && importantFact.map((e) => (
              <ListItem key={e._id} sx={{ py: 0.5 }}>
                <Box component="span" sx={{ 
                  width: 8, 
                  height: 8, 
                  backgroundColor: theme.palette.primary.main, 
                  borderRadius: '50%',
                  mr: 2,
                  mt: 0.7
                }} />
                <Typography variant="body1">{e.importantFactSatta}</Typography>
              </ListItem>
            ))}
          </List>
        </Card>

        {/* Alternatives Section */}
        <Card sx={styles.factCard('success')}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Alternative Of Satta King
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" sx={{ mb: 3 }}>
            Today Satta King's popularity is increasing among people due to the opportunity to earn more money in less time and not only Satta King but also many other online games whose number of players is increasing day by day. here are some alternatives for Satta King:
          </Typography>
          <List dense>
            {alterNative && alterNative.map((e) => (
              <ListItem key={e._id} sx={{ py: 0.5 }}>
                <Box component="span" sx={{ 
                  width: 8, 
                  height: 8, 
                  backgroundColor: theme.palette.secondary.main, 
                  borderRadius: '50%',
                  mr: 2,
                  mt: 0.7
                }} />
                <Typography variant="body1">{e.alternative}</Typography>
              </ListItem>
            ))}
          </List>
        </Card>
      </Container>
    </>
  );
};

export default LandingPage; 