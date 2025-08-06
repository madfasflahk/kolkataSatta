import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const YearMonthSelector = ({ onDateChange }) => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const handleYearChange = (e) => {
        const newYear = parseInt(e.target.value, 10);
        setYear(newYear);
        onDateChange(newYear, month);
    };

    const handleMonthChange = (e) => {
        const newMonth = parseInt(e.target.value, 10);
        setMonth(newMonth);
        onDateChange(year, newMonth);
    };

    const renderYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear - 100; i <= currentYear + 10; i++) {
            years.push(i);
        }
        return years.map((year) => (
            <MenuItem key={year} value={year}>
                {year}
            </MenuItem>
        ));
    };

    const renderMonthOptions = () => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months.map((month, index) => (
            <MenuItem key={index + 1} value={index + 1}>
                {month}
            </MenuItem>
        ));
    };

    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Year</InputLabel>
                <Select value={year} onChange={handleYearChange}>
                    {renderYearOptions()}
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Month</InputLabel>
                <Select value={month} onChange={handleMonthChange}>
                    {renderMonthOptions()}
                </Select>
            </FormControl>
        </Box>
    );
};

export default YearMonthSelector;
