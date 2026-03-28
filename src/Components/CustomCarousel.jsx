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
      <IconButton onClick={scrollLeft} sx={{ position: 'absolute', left: 0, top: '50%', zIndex: 2 }}>
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton onClick={scrollRight} sx={{ position: 'absolute', right: 0, top: '50%', zIndex: 2 }}>
        <ArrowForwardIosIcon />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 3,
          px: 5,
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