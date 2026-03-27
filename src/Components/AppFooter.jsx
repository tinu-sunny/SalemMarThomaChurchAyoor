import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, Grid, Card, CardContent, CardMedia} from '@mui/material';
function AppFooter() {
  return (
    <>
    
      {/* FOOTER */}
      <Box sx={{ background: '#fbf9f5', py: 5, mt: 10 }}>
        <Container>
          <Typography variant="h6" color="#486177">
            Salem Mar Thoma Church, Ayoor
          </Typography>

          <Typography variant="body2" color="gray">
            Ayoor, Kollam, Kerala - 691533
          </Typography>

          <Typography variant="body2" mt={2}>
            © 2024 All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default AppFooter