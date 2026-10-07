import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function About() {
    return (

        <Box
            component="section"
            id="about"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                px: 8,
            }}
        >
            <Box
                sx={{
                    maxWidth: 600,
                }}
            >
                <Typography variant="body1" sx={{fontSize: 25}}>
                    I'm a Computer Science student at the University of Central Florida.
                    I love the idea of turning imagination into something real.
                    I was—and still am—drawn to programming because of the freedom to
                    create something new from scratch and the opportunity to bring unique
                    ideas to life.
                </Typography>
            </Box>
        </Box>

    )
}
export default About