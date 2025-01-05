import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './YearlyData.css'; // Import your CSS file for styling
import Header from '../component/Header';
import HourglassLoader from '../component/Loader/Lodertwo';
import ResultDisplay from '../component/ResultDisplay';
import Marquee from '../component/Marque';

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
                setResultLoad(false);
                setFullYearChart(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getYearlyData(`${process.env.REACT_APP_API}result/fullYear?year=${year}`);
    }, [year]);

    if (resultLoad) {
        return (
            <div style={{ height: "85vh" }} className='d-flex justify-content-center align-items-center'>
                <HourglassLoader />
            </div>
        );
    }

    return (
        <>
            <Header />
            <Marquee />
            {(!fullYearChart ||fullYearChart.length===0) ? (
                <div style={{ height: "85vh" }} className="no-data-found">
                    <h2 className='text-center animated-text'>No data found for the year {year}</h2>
                </div>
            ) : (
                fullYearChart.sort((a, b) => a.month - b.month).map((item, index) => (
                    <div style={{minHeight:"80vh"}} className='mb-5' key={index}>
                        <h3 className='text-center'>SATTA KING {monthsArray[item.month - 1].toUpperCase()} RECORD CHART {item.year}</h3>
                        <ResultDisplay data={item} />
                    </div>
                ))
            )}
        </>
    );
};

export default YearlyData;
