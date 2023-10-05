import React, { useEffect, useState } from 'react';
import './slides.css';
import Typography from '@mui/material/Typography';

const Care = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a brief delay when the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <div id='care'>
      <div>
        <Typography
          className={`careTitle ${isVisible ? 'visible' : ''}`}
        >
          Aartas is bringing you
        </Typography>
        <Typography
          className={`minititle ${isVisible ? 'visible' : ''}`}
        >
          Closer to Care.
        </Typography>
        <Typography
          className={`CareSubTitle ${isVisible ? 'visible' : ''}`}
        >
          Getting the healthcare you deserve no longer requires a tense and
          tedious process. Consult with the best doctors who care for you, and
          connect you to the right treatments for your condition.
        </Typography>
      </div>
    </div>
  );
};

export default Care;
