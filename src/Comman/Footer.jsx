import React from 'react';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from '@mui/icons-material';

const Footer = () => {
  return (
    <div id='footer'>
      <Typography className='footerTitle'>STAY CONNECTED</Typography>
      <Typography className='footerInfo'>
        +91-9811160068
        <Typography>18A,Ring Road,Lajpat Nagar-IV.</Typography>
        <Typography className='footerInfo'> New Delhi - 110024</Typography>
        <Typography>
          <a
            href='https://www.facebook.com/aartasofficial'
            target='_blank'
            className='link'>
            <FacebookRoundedIcon className='footerIcons' />
          </a>
          <a
            href='https://www.instagram.com/aartasofficial/'
            target='_black'
            className='link'>
            {' '}
            <InstagramIcon className='footerIcons' />
          </a>
          <a
            href='https://www.linkedin.com/company/aartas-clinishare'
            target='_black'
            className='link'>
            <LinkedInIcon className='footerIcons' />
          </a>
          <a
            href='https://twitter.com/aartasofficial?lang=en/'
            target='_black'
            className='link'>
            <TwitterIcon className='footerIcons' />
          </a>
          <a
            href='https://www.youtube.com/@aartasofficial/featured'
            target='_black'
            className='link'>
            <YouTubeIcon className='footerIcons' />
          </a>
        </Typography>
        <span className='footerCopyRight'>
          Copyright © 2023 Aartas Care Pvt Ltd. All rights reserved.
        </span>
      </Typography>
    </div>
  );
};

export default Footer;
