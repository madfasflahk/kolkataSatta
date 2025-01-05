import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeInIST = () => {
    const localTime = new Date();
    const offset = localTime.getTimezoneOffset() * 60000;
    const utcTime = localTime.getTime() + offset;
    const istTime = new Date(utcTime + 19800000); // IST offset of 5.5 hours
    return istTime;
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours === 12) {
        hours -= 12; // Midnight case
    } else if (hours > 12) {
      hours -= 12; // Convert 24-hour format to 12-hour format
    }

    const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    return strTime;
  };

  const istTime = getTimeInIST();

  return (
    <div className='m-auto text-center fs-5 fw-bold'>
      ( {formatTime(istTime)} )
    </div>
  );
};

export default DigitalClock;
