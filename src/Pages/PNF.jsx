import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AppHeader from '../Components/AppHeader';
import AppFooter from '../Components/AppFooter';

function PNF() {
  const navigate = useNavigate();

  return (
    <>
      <AppHeader />

      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          px: 2,
          py: 8,
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -2,
          }}
        >
          {/* Video from public folder */}
          <source src="/smt.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure text readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.65)',
            zIndex: -1,
          }}
        />

        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, color: '#fff' }}>
          {/* TITLE */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              color: '#f4c95d',
              fontSize: { xs: '5rem', md: '8rem' },
              textShadow: '2px 4px 10px rgba(0,0,0,0.5)',
              mb: 1,
              fontFamily: 'Noto Serif, serif',
            }}
          >
            404
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Page Not Found
          </Typography>

          {/* SUBTEXT */}
          <Typography
            sx={{
              mt: 2,
              fontSize: '1.1rem',
              opacity: 0.9,
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Oops! The page you are looking for doesn’t exist, has been moved, or is temporarily unavailable.
          </Typography>

          {/* BUTTON */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              onClick={() => window.history.back()}
              variant="outlined"
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: '30px',
                borderColor: '#f4c95d',
                color: '#f4c95d',
                fontWeight: 'bold',
                '&:hover': {
                  borderColor: '#fff',
                  color: '#fff',
                  background: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Go Back
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="contained"
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: '30px',
                background: '#f4c95d',
                color: '#5a4a00',
                fontWeight: 'bold',
                '&:hover': {
                  background: '#e0b84c',
                },
              }}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>

      <AppFooter />
    </>
  );
}

export default PNF;