import React from 'react';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';
import Care from './Slides/Care';
import Huminity from './Slides/Huminity';
import Docter from './Slides/Docter';
import Mordern from './Slides/Mordern';
import Feedback from './Slides/Feedback';
import HealthCare from './Slides/HealthCare';
import ListofDocs from './Slides/ListofDocs';
import AartasApp from './Slides/AartasApp';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export const Home = () => {
  return (
    <div>
      <Header />
      <Care />
      <Huminity />
      <Docter />
      <ListofDocs />
      <Mordern />
      <Feedback />
      <AartasApp />
      <HealthCare />
      <CallRoundedIcon
        id='CallRoundedIcon'
        style={{
          borderRadius: '5rem',
          padding: '1rem',
          color: 'white',
          backgroundColor: '#222023',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
        }}
      />

      <Footer />
    </div>
  );
};
