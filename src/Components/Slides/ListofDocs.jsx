import React from 'react';
import ankita from '../../assets/dr.ankita.png';
import ankur from '../../assets/dr.ankur.png';
import arushi from '../../assets/dr.Arushi.png';
import suvarna from '../../assets/dr.k.suvarna.png';
import modul from '../../assets/dr.modul.png';
import shekhar from '../../assets/dr.Shekhar.png';
import Typography from '@mui/material/Typography';
const ListofDocs = () => {
  return (
    <div id='docs'>
      <div className='profiles'>
        <img src={ankita} alt='ankit' className='doc' />
        <Typography>Dr.Ankita Sharma</Typography>
      </div>
      <div className='profiles'>
        <img src={ankur} alt='ankur' className='doc' />
        <Typography>Dr.Ankur Nanda</Typography>
      </div>
      <div className='profiles'>
        <img src={arushi} alt='arushi' className='doc' />
        <Typography>Dr.Arushi </Typography>
      </div>
      <div className='profiles'>
        <img src={suvarna} alt='suvarna' className='doc' />
        <Typography>Dr.K.Suvarna</Typography>
      </div>
      <div className='profiles'>
        <img src={modul} alt='modul' className='doc' />
        <Typography>Dr.Dobul Mandal</Typography>
      </div>
      <div className='profiles'>
        <img src={shekhar} alt='shekhar' className='doc' />
        <Typography>Dr.Shekhar Mandal</Typography>
      </div>
      <div className='profiles'>
        <img src={ankita} alt='ankit' className='doc' />
        <Typography>Dr.Ankita Sharma</Typography>
      </div>
      <div className='profiles'>
        <img src={ankur} alt='ankur' className='doc' />
        <Typography>Dr.Ankur Nanda</Typography>
      </div>
      <div className='profiles'>
        <img src={arushi} alt='arushi' className='doc' />
        <Typography>Dr.Arushi </Typography>
      </div>
      <div className='profiles'>
        <img src={suvarna} alt='suvarna' className='doc' />
        <Typography>Dr.K.Suvarna</Typography>
      </div>
      <div className='profiles'>
        <img src={modul} alt='modul' className='doc' />
        <Typography>Dr.Dobul Mandal</Typography>
      </div>
      <div className='profiles'>
        <img src={shekhar} alt='shekhar' className='doc' />
        <Typography>Dr.Shekhar Mandal</Typography>
      </div>
    </div>
  );
};

export default ListofDocs;
