import React from 'react';
import './slides.css';
import Typography from '@mui/material/Typography';
import tweet from '../../assets/tweet.png'
import bussinesstoday from '../../assets/businesstoday.png'
import yourstory from '../../assets/yourstory.png'
import thehindu from '../../assets/The-Hindu-Logo.jpg'
const HealthCare = () => {
  return (
    <div id='healthcare'>
      {' '}
      <Typography className='healthtitle'>The best healthcare comes</Typography>
      <Typography className='healthtitle'>without any compromise.</Typography>
      <div className='healthblogs'>
        <div className='blogs'>
        <img src={tweet} alt='Tweet'  className='blogimg'/>
          <h2>Aartas CliniShare is an unique Concept, that will dis...</h2>
          <p>Keynote by Shri. Amitabh Kant, CEO, Niti Ayog on the inauguration of flagship Aartas CliniShare at Ring Ro....</p>
        </div>
        <div className='blogs'>
        <img src={yourstory} alt='yourstory'  className='blogimg'/>
          <h2>Aartas CliniShare is reinventing the Doctors priv...</h2>
          <p>The medical co-working startup plans to create a system where doctors practice their idea of care that works...</p>
        </div>
        <div className='blogs'>
        <img src={bussinesstoday} alt='bussinesstoday'  className='blogimg'/>
          <h2>Aartas creates a parallel healthcare Eco-system.</h2>
          <p>CliniShare is modeled on the principal of shared economy helping reduce the burden on existina Healthcare sv...</p>
        </div>
        <div className='blogs'>
        <img src={thehindu} alt='thehindu'  className='blogimg'/>
          <h2>Omicron variant puts spotlight back on safety.</h2>
          <p>Expert Dr. Vidya Taneja, pediatrician gives her view on the new variant of coronavirus COVID-19</p>
        </div>
        
      </div>
    </div>
  );
};

export default HealthCare;
