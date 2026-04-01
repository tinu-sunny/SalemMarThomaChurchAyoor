import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, Grid, Card, CardContent, CardMedia, Divider} from '@mui/material';
import logo from '../assets/MTC_logo.webp'
function AppFooter() {
  return (
<>
  <Box sx={{ background: '#fbf9f5', py: { xs: 5, md: 8 }, mt: 10 }}>
    <Container>

      {/* TOP SECTION */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          // alignItems:"center",
          gap: { xs: 4, md: 2 },
        }}
      >

        {/* LOGO + ADDRESS */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            width: { xs: '100%', md: '30%' },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: 80 }}
          />

          <Box>
            <Typography color="#486177" fontWeight={600}>
              Salem Mar Thoma Church
            </Typography>
            <Typography variant="body2" color="gray">
              Ayoor, Kollam, Kerala - 691533
            </Typography>
          </Box>
        </Box>

        {/* QUICK LINKS */}
        <Box sx={{ width: { xs: '100%', md: '20%' } }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Quick Links
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {['Home', 'Parish History', 'Vicars Served', 'Committee Members'].map((item) => (
              <Typography
                key={item}
                component="a"
                href="#"
                sx={{
                  color: '#555',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: '#735c00' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* ORGANIZATIONS */}
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Church Organizations
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Church Choir', 'Sunday School', 'Sevika Sangam', 'Yuvajana Sakhyam'].map((item) => (
                <Typography
                  key={item}
                  component="a"
                  href="#"
                  sx={{
                    color: '#555',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': { color: '#735c00' },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Edavaka Mission', 'Senior Citizens'].map((item) => (
                <Typography
                  key={item}
                  component="a"
                  href="#"
                  sx={{
                    color: '#555',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': { color: '#735c00' },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

      </Box>

      {/* DIVIDER */}
      <Divider sx={{ my: 4 }} />

      {/* BOTTOM SECTION */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="body2" color="#486177">
          Salem Mar Thoma Church, Ayoor
        </Typography>

        <Typography variant="body2" color="#486177">
          © 2026 All rights reserved
        </Typography>
      </Box>

    </Container>
  </Box>
</>
  )
}

export default AppFooter