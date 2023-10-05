import React from 'react';
import Typography from '@mui/material/Typography';
const Clinic = () => {
  return (
    <div className='Clinic'>
      <div className='clinicInfo'>
        {' '}
        <div>
          <Typography className='info'>
            It's more than just a clinic,
          </Typography>
          <Typography className='info'>
            it's an experience for better care.
          </Typography>
        </div>
        <div>
          <button className='clincbtn'>See All Doctors</button>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
