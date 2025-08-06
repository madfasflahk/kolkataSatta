import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CircularProgress, Box } from '@mui/material';
import Header from '../component/Header';
import Marquee from '../component/Marque';
import ResultDisplay from '../component/ResultDisplay';

const YearlyData = () => {
    const { year } = useParams();
    const [fullYearChart, setFullYearChart] = useState(null);
    const [resultLoad, setResultLoad] = useState(false);

    const monthsArray = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getYearlyData = async (url) => {
        setResultLoad(true);
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                setFullYearChart(response.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setResultLoad(false);
        }
    };

    useEffect(() => {
        getYearlyData(`${process.env.REACT_APP_API}result/fullYear?year=${year}`);
    }, [year]);

    if (resultLoad) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Header />
            <Marquee />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {(!fullYearChart || fullYearChart.length === 0) ? (
                    <Box sx={{ textAlign: 'center', minHeight: '85vh' }}>
                        <Typography variant="h4">No data found for the year {year}</Typography>
                    </Box>
                ) : (
                    fullYearChart.sort((a, b) => a.month - b.month).map((item, index) => (
                        <Card key={index} sx={{ mb: 4 }}>
                            <CardContent>
                                <Typography variant="h5" component="div" align="center" gutterBottom>
                                    SATTA KING {monthsArray[item.month - 1].toUpperCase()} RECORD CHART {item.year}
                                </Typography>
                                <ResultDisplay data={item} />
                            </CardContent>
                        </Card>
                    ))
                )}
            </Container>
        </>
    );
};

export default YearlyData;

