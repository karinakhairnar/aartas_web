import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import './Comman.css';


const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <AppBar position='fixed' id='header'> {/* Set position to 'fixed' */}
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            className='tabs'
            sx={{
              fontSize: '30px',
              mr: 2,
              fontFamily: 'Times New Roman, serif',
              fontWeight: 400,
              letterSpacing: '.2rem',
            }}>
            aartas
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size='large'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
             
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
              aria-controls={'demo-positioned-menu'}
              aria-haspopup='true'
              onClick={handleClick}
              variant='h6'
              noWrap
              component='a'
              className='tabs'
              sx={{
                mr: 2,
                fontSize: '18px',
                fontFamily: ' serif',
              }}>
              {' '}
              Locations
            </Typography>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>
              <MenuItem
                onClick={handleClose}
                sx={{
                  backgroundImage: 'url(../assets/aartas-logo.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                }}>
                <Typography variant='h6' id='Location'>
                  Aartas CliniShare Delhi
                  <span className='locationAddresss'>
                    {'\n'}18A, RingRing Road, Lajpat nagar 4. {'\n'}New Delh, 110024i
                  </span>
                  <span className='greenAddress'>{'\n'}GET DIRECTIONS</span>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                {' '}
                <Typography variant='h6' id='Location'>
                  Aartas CliniShare Gurgaon
                  <span className='locationAddresss'>
                    {'\n'}10P, Golf Course Road, Sector 28. DLF {'\n'}Phase - 1.
                    Gurugram, Haryana, 122009
                  </span>
                  <span className='greenAddress'>{'\n'}GET DIRECTIONS</span>
                </Typography>
              </MenuItem>
            </Menu>
            <Typography
              variant='h6'
              noWrap
              component='a'
              className='tabs'
              sx={{
                mr: 2,
                fontSize: '18px',
                fontFamily: ' serif',
              }}>
              Doctors
            </Typography>
          </Box>
        </Toolbar>
      </Container>
      <Typography>
        <Link
          className='applink'
          href='https://aartas.com/v1/public/qr'
          target='_blank'>
          Download the Aartas-heathcare App <AppleIcon />
          <PlayArrowIcon />
          <ArrowRightAltIcon />
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Header;
