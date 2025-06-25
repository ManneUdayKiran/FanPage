import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Player } from '@lottiefiles/react-lottie-player';
import logoAnimation from '../assets/logo-animation.json'; // You can replace or leave this empty

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, #b71c1c, #f57f17)', // Gradient: red to gold
        minHeight: isMobile ? 80 : 100,
        justifyContent: 'center',
        marginBottom: isMobile ? 0 : 2,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          py: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Logo placeholder */}
          <Box sx={{ width: isMobile ? 50 : 60, height: isMobile ? 50 : 60 }}></Box>
            <img
                
                
                src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Royal_Challengers_Bengaluru_Logo.svg/800px-Royal_Challengers_Bengaluru_Logo.svg.png'
                style={{ height: isMobile ? '50px' : '60px', width: isMobile ? '50px' : '60px' }}   
                            />

          <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold" sx={{ color: '#fff' }}>
            Royal Challengers Bengaluru
          </Typography>
        </Box>

        <Typography variant="caption" sx={{ mt: 0.5, color: '#fff' }}>
          Strike Hard. Win Big.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
