import React from 'react';
import Typography from '@mui/material/Typography';
import Img1 from '../../assets/appImg1 (1).png';
import Img2 from '../../assets/appImg2.png';
import Img3 from '../../assets/appImg3.png';
import Img4 from '../../assets/appImg4.png';
import Img5 from '../../assets/appImg5.png';

const AartasApp = () => {
  return (
    <div id='AartasApp'>
      <Typography className='apptitle'>
        <p>The Aartas App - One for All</p>
      </Typography>
      <Typography className='mainTitle'>Meeting Leading Doctors</Typography>
      <Typography className='mainTitle'>Made simple and easy</Typography>
      <div className='appImg'>
        <div className='img'>
          <img src={Img1} alt='img1' className='doc' />
        </div>
        <div className='img'>
          <img src={Img2} alt='img1' className='doc' />
        </div>
        <div>
          <img src={Img3} alt='img1' className='doc' />
        </div>
        <div className='img'>
          <img src={Img4} alt='img1' className='doc' />
        </div>
        <div className='img'>
          <img src={Img5} alt='img1' className='doc' />
        </div>
      </div>
    </div>
  );
};

export default AartasApp;
