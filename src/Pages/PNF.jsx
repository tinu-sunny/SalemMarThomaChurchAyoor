import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
function PNF() {
  return (
  <>
  
   <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // background: 'linear-gradient(to bottom, #f5f3ef, #ffffff)',
        background: '#000',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">

        {/* IMAGE */}
        <Box
          component="img"
          src="/images/404.png"
          alt="404"
          sx={{
            width: '100%',
            maxWidth: 350,
            mx: 'auto',
            mb: 3,
            animation: 'float 3s ease-in-out infinite',
          }}
        />

        {/* TITLE */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#486177',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Page Not Found
        </Typography>

        {/* SUBTEXT */}
        <Typography
          sx={{
            mt: 2,
            color: '#666',
            fontSize: '0.95rem',
          }}
        >
          Oops! The page you are looking for doesn’t exist or has been moved.
        </Typography>

        {/* BUTTON */}
        <Button
        
         onClick={() => window.history.back()}
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.2,
            borderRadius: '30px',
            background: '#735c00',
            '&:hover': {
              background: '#5c4800',
            },
          }}
        >
          Go Back Home
        </Button>

        {/* ANIMATION */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>

      </Container>
    </Box>
</>
  )
}

export default PNF