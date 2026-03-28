import { Box, CircularProgress, Typography } from '@mui/material';
import logo from '../assets/MTC_logo.webp'
const LoaderWithIcon = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo} // change path if needed
        alt="Loading"
        sx={{
          width: { xs: 60, md: 100 },
          height: { xs: 60, md: 100 },
          mb: 2,
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />

      {/* circularprogress */}
     <CircularProgress size={30} />

      {/* Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.6; transform: scale(0.95); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0.6; transform: scale(0.95); }
          }
        `}
      </style>
    </Box>
  );
};

export default LoaderWithIcon;