import { useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomCarousel = ({ children }) => {
  const scrollRef = useRef();
  const scrollAmount = 320;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let interval;

    const start = () => {
      interval = setInterval(() => {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5
        ) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 3000);
    };

    const stop = () => clearInterval(interval);

    start();

    container.addEventListener('mouseenter', stop);
    container.addEventListener('mouseleave', start);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', stop);
      container.removeEventListener('mouseleave', start);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        onClick={scrollLeft}
        aria-label="Previous"
        sx={{
          position: 'absolute',
          left: { xs: 6, md: 10 },
          top: { xs: '130px', md: '140px' },
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          color: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: { xs: 34, md: 42 },
          height: { xs: 34, md: 42 },
          transition: 'all 0.25s ease',
          '&:hover': {
            backgroundColor: '#ffffff',
            color: '#111',
            boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
            transform: 'translateY(-50%) scale(1.08)',
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, ml: '-2px' }} />
      </IconButton>

      <IconButton
        onClick={scrollRight}
        aria-label="Next"
        sx={{
          position: 'absolute',
          right: { xs: 6, md: 10 },
          top: { xs: '130px', md: '140px' },
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          color: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: { xs: 34, md: 42 },
          height: { xs: 34, md: 42 },
          transition: 'all 0.25s ease',
          '&:hover': {
            backgroundColor: '#ffffff',
            color: '#111',
            boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
            transform: 'translateY(-50%) scale(1.08)',
          },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }} />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomCarousel;