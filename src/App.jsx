import About from './About.jsx'
import Projects from './Projects.jsx'
import ParticleBackground from './ParticleBackground.jsx'
import pic from './assets/pic.jpg'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'


function App() {

  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: '#1a1a24',
          boxShadow: 'none',

        }}
      >
        <Toolbar sx={{ position: 'relative' }}>

          <Box
            sx={{
              display: 'flex',
              gap: 10,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Button href="#home" color="inherit" sx={{ whiteSpace: 'nowrap'}}>
              Home
            </Button>

            <Button href="#about" color="inherit" sx={{ whiteSpace: 'nowrap'}}>
              About Me
            </Button>

            <Button href="#projects" color="inherit" sx={{ whiteSpace: 'nowrap'}}>
              My Projects
            </Button>
          </Box>

          <Button
            color="inherit"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{
              position: 'absolute',
              right: 20,
              width: 140,
              whiteSpace: 'nowrap'
            }}
          >
            Let's Connect
          </Button>
            
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            disableScrollLock
            slotProps={{
              paper: {
                sx: {
                  width: {
                    xs: 110,
                    sm: 130,
                    md: 140,
                  },
                },
              },
            }}
          >
            <MenuItem
              component="a"
              href="https://github.com/sheydakate"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </MenuItem>

            <MenuItem
              component="a"
              href="https://linkedin.com/in/sheyda-kate"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </MenuItem>

            <MenuItem
              component="a"
              href="mailto:sheydakate@gmail.com"
            >
              Email
            </MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>


      <Box component="main">

        <ParticleBackground />


        {/* HOME */}
        <Box
          component="section"
          id="home"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box
            component="img"
            src={pic}
            alt="Portrait of Sheyda Kate"
            sx={{
              mt: 10,
              width: 600,
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 5,
            }}
          />

          <Box>
            <Typography 
              variant="h1"
              sx={{
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                letterSpacing: 3,
              }}
            >
              SHEYDA KATE
            </Typography>

            <Typography variant="body1">
              CS Major | UCF
            </Typography>
          </Box>
        </Box>


        {/* ABOUT */}
        <About />


        {/* PROJECTS */}
        <Projects />

      </Box>
    </>
  )
}

export default App