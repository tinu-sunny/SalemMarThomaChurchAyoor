import React from 'react'
import AppHeader from '../Components/AppHeader'
import AppFooter from '../Components/AppFooter'
import { Box, Button, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material'
import services from '../Data/Data'
import churchImg from '../assets/Church.png'
function IndexPage() {

  return (
    
    <>
      {/* <div>
        <AppHeader />
      </div> */}

      {/* Body */}

      <Box>
        {/* Welcome Message */}

        <Box
          sx={{
            height: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            px: "2",
            backgroundImage: `url('${churchImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay image  */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(72,97,119,0.6), rgba(0, 0, 0, 0.4))",
            }}
          />

          <Container sx={{ position: "relative", zIndex: 2 }}>
            {/* welcome Message */}
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              Welcome to Salem Mar Thoma Church, Ayur
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { sx: "1rem", md: "1.4rem" },
              }}
            >
              A place of Worship,Faith And Fellowship
            </Typography>

            {/* Button in welcome section */}

            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                // flexDirection:{xs:'column',md:'row'},
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  px: { xs: 2, md: 4, lg: 4 },
                }}
              >
                View Service Timings
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                 backgroundColor:"transparent",
                 border:'2px solid #0d6dfdae',
                 ":hover":{
backgroundColor:"#0d6dfdae "
                 },
                  px: { xs: 2, md: 4, lg: 4 },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>

{/* welcome  messeage from vicar */}

<Box sx={{ background: '#f7f5f2', py: { xs: 6, md: 10 } }}>
  <Container>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 4, md: 6 },
      }}
    >

      {/* IMAGE */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6br1RDTcWLV0p0mKXSy95UcYZZHh7OSf0hWL4RIssTtuvLBwiZ75OOa5J4CSsUXBPEyorYzpwxDXhVRyIrRqTnVwadcEJYVXHUpBS7zWldKZA6nr49-2kcZMsrqhInewv0l66NapJmDQG4mGuszyrCcPbNesDnVRPStENnFX-fshZ5MpYaGNPgoxj4QixgwMYHfEvh9rJwVyJXIgZZPMprwVhOANTnXyN6ureuFmKzBmSxGJlj7ZSUVIxMUqEPpsXcgkI5urEN50"
          sx={{
            width: { xs: '90%', sm: '70%', md: '100%' },
            borderRadius: '24px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          }}
        />
      </Box>

      {/* TEXT */}
      <Box sx={{ width: { xs: '100%', md: '60%' } }}>

        {/* Badge */}
        <Box
          sx={{
            display: 'inline-block',
            px: 2,
            py: 0.5,
            background: '#f4c95d',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '2px',
            color: '#5a4a00',
            mb: 2,
          }}
        >
        Message from the Vicar
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: 'Noto Serif, serif',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            color: '#486177',
            fontWeight: 600,
            mb: 2,
          }}
        >
          പ്രിയ സഹോദരങ്ങളേ,
        </Typography>

        {/* Paragraph */}
        <Typography sx={{ color: '#5f6368', lineHeight: 1.9, mb: 2 }}>
          നമ്മുടെ കർത്താവും രക്ഷിതാവുമായ യേശുക്രിസ്തുവിന്റെ പരിശുദ്ധ നാമത്തിൽ നിങ്ങളെ ഹൃദയം നിറഞ്ഞ അഭിവാദ്യം ചെയ്യുന്നു.
        </Typography>

        <Typography sx={{ color: '#5f6368', lineHeight: 1.9, mb: 2 }}>
          സാലേം മാർത്തോമാ പള്ളി, ആയൂർ എന്ന ഈ വിശ്വാസകുടുംബത്തിന്റെ ഭാഗമായിരിക്കാനുള്ള അനുഗ്രഹം ദൈവം നമുക്കെല്ലാവർക്കും നൽകിയിരിക്കുന്നു.
        </Typography>

        {/* Read More */}
        <Typography sx={{ color: '#5f6368', lineHeight: 1.9 }}>
          ഇന്നത്തെ തിരക്കേറിയ ജീവിതത്തിൽ സമാധാനം, പ്രത്യാശ...
          <Box
            component="span"
            sx={{
              ml: 1,
              color: '#4c00ff9f',
              fontWeight: 600,
              cursor: 'pointer',
              '&:hover': {
                color: '#4c00ff',
                textDecoration: 'underline',
              },
            }}
          >
            Read More →
          </Box>
        </Typography>

        {/* Signature */}
        <Typography
          sx={{
            mt: 3,
            fontStyle: 'italic',
            color: '#735c00',
            fontSize: '1.2rem',
            fontFamily: 'Noto Serif, serif',
          }}
        >
          — Vicar <br />
          Salem Mar Thoma Church, Ayoor
        </Typography>
      </Box>
    </Box>
  </Container>
</Box>

    {/* Service card  */}

    <Box sx={{ background: '#f5f3ef', py: { xs: 6, md: 10 } }}>
      <Container>

        {/* Heading */}
        <Typography
          align="center"
          sx={{
            color: '#486177',
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600,
          }}
        >
          Divine Encounters
        </Typography>

        <Typography
          align="center"
          sx={{
            color: '#8a8f94',
            fontSize: '0.9rem',
            letterSpacing: '2px',
            mt: 1,
            mb: 6,
          }}
        >
          JOIN US IN PRAYER AND WORSHIP
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',
                  sm: '45%',
                  md: '30%',
                },
              }}
            >
              <Card
                sx={{
                  borderRadius: '30px',
                  p: 4,
                  height:"300px",
                  background: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <CardContent>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      background: '#eef1f4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      color: '#486177',
                      ":hover":{
                        backgroundColor:"#f4c95d",
                        
                      }
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: 'Noto Serif, serif',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#486177',
                      mb: 3,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Content */}
                  {service.data.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 2.5,
                      }}
                    >
                      <Typography sx={{ color: '#6b6f73', fontSize: '0.95rem' }}>
                        {item.label}
                      </Typography>
             

                      <Typography
                        sx={{
                          color: '#735c00',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }}
                      >
                        {item.time}
                      </Typography>
                    </Box>
                  ))}
                  
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>






      </Box>
      {/* Body End  */}

      {/* <div>
        <AppFooter />
      </div> */}
    </>
  );
}

export default IndexPage