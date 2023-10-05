import React, { useEffect, useState } from 'react';
import './slides.css';
import Typography from '@mui/material/Typography';

const Huminity = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) { // You can adjust the scroll position threshold
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`huminity ${isScrolled ? 'huminity-scrolled' : ''}`}>
      <Typography className='title'>We believe in treating our patients with</Typography>
      <Typography className='maintitle'>warmth, empathy, compassion and kindness.</Typography>
      <Typography className='title'>
        The quality healthcare we provide at Aartas is a reflection of our
        humanity.
      </Typography>
    </div>
  );
};

export default Huminity;
