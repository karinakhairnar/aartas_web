import React, { useEffect, useState } from 'react';
import './slides.css';
import Typography from '@mui/material/Typography';
const Docter = () => {
  return (
    <div id='docter'>
      <Typography className='docTitle'>Doctors at Aartas</Typography>
      <Typography className='docSubtitle'>Consult with experts.</Typography>
      <Typography className='docSubtitle'> From every speciality.</Typography>
      <Typography className='docInfo'>
        We have 20+ specialities all under one roof. You can meet with them
        during your same visit and reduce your frequent visits to hospitals.
      </Typography>
    </div>
  );
};

export default Docter;
