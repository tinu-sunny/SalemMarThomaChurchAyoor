import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/MTC_logo.webp'
function AppHeader() {

const pages = ['Home', 'About', 'Worship', 'Ministries', 'Events', 'Gallery', 'Contact'];
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // 🔥 Hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // hide
      } else {
        setShow(true); // show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
     <>
      <Slide appear={false} direction="down" in={show}>
        <AppBar
          position="fixed"
          sx={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>

            {/* LOGO */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{ width: { xs: 50, md: 70 } }}
              />
              <Typography
                sx={{
                  color: '#486177',
                  fontWeight: 'bold',
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  lineHeight: 1.2,
                }}
              >
                Salem Mar Thoma Church <br />
                <span style={{ fontSize: '0.7rem' }}>Ayoor • Estd.1932</span>
              </Typography>
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {pages.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#486177',
                    fontWeight: 500,
                    position: 'relative',
                    '&:hover': {
                      color: '#735c00',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* MOBILE MENU BUTTON */}
            <IconButton
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
      </Slide>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {pages.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default AppHeader