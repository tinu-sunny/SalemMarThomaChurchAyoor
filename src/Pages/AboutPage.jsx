import React from 'react'
import AppHeader from '../Components/AppHeader'
import AppFooter from '../Components/AppFooter'
import { Box, Button, Container, Typography } from '@mui/material'
import churchImg from '../assets/Church.png'
import CustomCarousel from '../Components/CustomCarousel'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';


function AboutPage() {
const stats = [
  {
    icon: <AccountBalanceIcon />,
    label: "DIOCESE",
    value: "TVM – KOLLAM ",
  },
  {
    icon: <CalendarMonthIcon />,
    label: "ESTABLISHED",
    value: "19--",
  },
  {
    icon: <GroupsIcon />,
    label: "PARISH FAMILIES",
    value: "250",
  },
  {
    icon: <FavoriteIcon />,
    label: "ORGANIZATIONS",
    value: "8 Wings",
  },
];
    const leaders = [
           {
    name: "Mr. Shaji Oommen",
    role: "Lay Ministrant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
  {
    name: "Mr. Jacob Mathew",
    role: "Vice President",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
   {
    name: "Mr. Shaji Oommen",
    role: "Lay Ministrant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
  {
    name: "Mrs. Sarah Philip",
    role: "Church Secretary",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
   {
    name: "Mr. Shaji Oommen",
    role: "Lay Ministrant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
  {
    name: "Mr. PV Thomas",
    role: "Trustee (Finance)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
  {
    name: "Mr. Shaji Oommen",
    role: "Lay Ministrant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
     {
    name: "Mr. Shaji Oommen",
    role: "Lay Ministrant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-jpjRjaDeVkzMDsfkIyR-YjYJiHF-BQHPw&s",
  },
];
  return (

   <>
      <div>  <AppHeader/></div>

        {/*Body  */}
        <Box>

        {/*Banner */}
 <Box
          sx={{
            height: "80vh",
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
             About 
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { sx: "1rem", md: "3.4rem",fontWeight:'bold' },
              }}
            >
             Salem Mar Thoma Church, Ayur
            </Typography>

          </Container>
        </Box>


{/* about church  */}
    <Box sx={{ py: { xs: 6, md: 10 }, background: '#fbf9f5' }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              color: '#735c00',
              fontSize: '0.8rem',
              letterSpacing: '2px',
              fontWeight: 600,
            }}
          >
            ABOUT OUR CHURCH
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: '#486177',
              fontWeight: 700,
              mt: 1,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            A Legacy of Faith in Ayoor
          </Typography>
        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5,
            alignItems: 'flex-start',
          }}
        >

          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: '#555',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                mb: 3,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima incidunt voluptas eum eos nam maiores! Nesciunt iure, molestias recusandae amet, ex itaque nam ab asperiores laboriosam libero excepturi voluptate.
            </Typography>

            <Typography
              sx={{
                color: '#555',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                mb: 3,
              }}
            >
              Dolor sit repudiandae pariatur unde mollitia praesentium at. Dolorum in quod rerum cumque a ratione error voluptatum at, commodi blanditiis praesentium doloremque illum accusantium nihil dolore.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                borderRadius: '30px',
                color: '#735c00',
                borderColor: '#735c00',
                mt: 2,
                px: 3,
                '&:hover': {
                  background: '#735c00',
                  color: '#fff',
                },
              }}
            >
              Read More →
            </Button>
          </Box>

          {/* RIGHT CONTENT (CARD STYLE) */}
          <Box
            sx={{
              flex: 1,
              background: '#fff',
              borderRadius: '20px',
              p: { xs: 3, md: 4 },
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            }}
          >
            <Typography
              sx={{
                color: '#486177',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Our Mission
            </Typography>

            <Typography
              sx={{
                color: '#666',
                lineHeight: 1.8,
                fontSize: '0.95rem',
              }}
            >
              To nurture spiritual growth, foster fellowship, and serve the community with love and compassion through Christ-centered worship and outreach.
            </Typography>

            <Typography
              sx={{
                color: '#486177',
                fontWeight: 600,
                mt: 3,
                mb: 1,
              }}
            >
              Our Vision
            </Typography>

            <Typography
              sx={{
                color: '#666',
                lineHeight: 1.8,
                fontSize: '0.95rem',
              }}
            >
              To be a vibrant and welcoming faith community where all experience the presence of God and grow together in faith.
            </Typography>
          </Box>

        </Box>

      </Container>
    </Box>

{/* Leaders */}

<Box sx={{ py: { xs: 6, md: 10 },  }}>
      <Container maxWidth="lg">

        {/* HEADING */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: '#486177',
              fontWeight: 600,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
            }}
          >
            Our Vicar & Leadership
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 3,
              background: '#735c00',
              mx: 'auto',
              mt: 1,
              borderRadius: 2,
            }}
          />
        </Box>

        {/* CARD */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5,
            alignItems: 'center',
            background: '#fff',
            borderRadius: '20px',
            p: { xs: 3, md: 5 },
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          }}
        >

          {/* IMAGE */}
          <Box
            component="img"
            src="https://c8.alamy.com/comp/2GX4JER/priest-icon-flat-style-2GX4JER.jpg"
            alt="Vicar"
            sx={{
              width: { xs: '100%', md: 280 },
              height: { xs: 280, md: 320 },
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />

          {/* TEXT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                color: '#486177',
                fontWeight: 600,
              }}
            >
              Rev. Abraham Varghese
            </Typography>

            <Typography
              sx={{
                color: '#735c00',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '1px',
                mt: 1,
                mb: 2,
              }}
            >
              PARISH VICAR
            </Typography>

            <Typography
              sx={{
                color: '#666',
                fontStyle: 'italic',
                lineHeight: 1.8,
                mb: 2,
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              "My ministry is rooted in the belief that every soul is a sacred story. 
              Here at Salem, we strive to listen, lead, and love as Christ did. 
              It is my profound honor to walk alongside this community as we navigate 
              our journey of faith together."
            </Typography>

            <Typography
              sx={{
                color: '#999',
                fontSize: '0.8rem',
              }}
            >
              Joined Salem Mar Thoma Church in 2021 | Master of Divinity
            </Typography>
          </Box>

        </Box>

      </Container>
      
    </Box>


    {/*members */}
<Box sx={{p:{xs:6,md:10}}}>
    <CustomCarousel>
      {leaders.map((item, i) => (
        <Box
          key={i}
          sx={{
            flex: '0 0 auto',
            textAlign: 'center',
            width: {
              xs: '100%',   // 📱 1 per view
              sm: '50%',    // tablet
              md: '25%',    // desktop
            },
            px: 2,
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            src={item.img}
            alt={item.name}
            sx={{
              width: { xs: 120, md: 160 },
              height: { xs: 120, md: 160 },
              borderRadius: '50%',
              objectFit: 'cover',
              mx: 'auto',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              transition: '0.4s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
    
          {/* NAME */}
          <Typography
            sx={{
              mt: 2,
              fontWeight: 600,
              color: '#486177',
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            {item.name}
          </Typography>
    
          {/* ROLE */}
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#999',
              letterSpacing: '1px',
              mt: 0.5,
            }}
          >
            {item.role.toUpperCase()}
          </Typography>
        </Box>
      ))}
    </CustomCarousel>
</Box>


{/* card for data   */}

  <Box sx={{ py: { xs: 6, md: 8 }, background: '#f5f3ef' }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, md: 4 },
          }}
        >
          {stats.map((item, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: '100%', sm: '45%', md: '22%' },
                background: '#fff',
                borderRadius: '20px',
                p: 3,
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  mx: 'auto',
                  mb: 2,
                  borderRadius: '50%',
                  background: '#eef1f4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#486177',
                }}
              >
                {item.icon}
              </Box>

              {/* LABEL */}
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  letterSpacing: '1px',
                  color: '#999',
                  mb: 1,
                }}
              >
                {item.label}
              </Typography>

              {/* VALUE */}
              <Typography
                sx={{
                  fontWeight: 600,
                  color: '#486177',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>


        </Box>
        {/* body end */}

      <div>  <AppFooter/></div>
   </>
  )
}

export default AboutPage