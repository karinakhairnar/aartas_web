import React from 'react';
import { CircularProgress, Typography, Container, Box } from '@mui/material';
import aartasLogo from '../assets/aartas-logo.png';

export const Loader = () => {
  return (
    <Container maxWidth='sm'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        minHeight='100vh'>
      <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              fontSize: '50px', 
              mr: 2,
              fontFamily: 'Times New Roman, serif',
              fontWeight: 600,
              letterSpacing: '.2rem',
              color: 'black', 
              textDecoration: 'none',
            }}
          >
            aartas
          </Typography>
        <CircularProgress size={50} />
      </Box>
    </Container>
  );
};
