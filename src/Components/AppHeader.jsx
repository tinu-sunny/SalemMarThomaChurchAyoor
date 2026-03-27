import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, Grid, Card, CardContent, CardMedia} from '@mui/material';
function AppHeader() {
  return (
    <>
     {/* NAVBAR */}
      <AppBar position="fixed" sx={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ color: '#486177', fontWeight: 'bold' }}>
            Salem Mar Thoma Church, Ayoor
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {['Home', 'About', 'Worship', 'Ministries', 'Events', 'Gallery', 'Contact'].map((item) => (
              <Button key={item} sx={{ color: '#486177' }}>
                {item}
              </Button>
            ))}
          </Box>

          <Button variant="contained" sx={{ borderRadius: '30px', background: '#486177' }}>
            Service Timings
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppHeader