import portfolioPic from './assets/portfolioPic.png'
import contextLensPic from './assets/contextLensPic.png'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

function Projects() {
    return (
        //page frame
        <Box
            component="section"
            id="projects"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 8,
                scrollMargin: '45px',
            }}
        >

            <Stack direction="row" spacing={6} alignItems="stretch">
                
                <Box sx={{ 
                        width: 450,
                        border: '2px solid purple',
                        borderRadius: 4,
                        padding: 2,
                        display: 'flex',
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={4}

                    >
                        <Typography variant='h5'>
                            My Portfolio
                        </Typography>

                        <Typography 
                            variant='body1'
                            sx={{
                                textAlign: 'left'
                            }}
                        >
                            My portfolio is a special project to me because it was 
                            the first thing I built from scratch. There is something 
                            really rewarding about starting with a blank page and slowly 
                            turning it into something that feels like my own.
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemText primary="• React + JavaScript" />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="• Material UI (MUI) for responsive UI design" />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="• Custom Canvas particle animation" />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="• Git/GitHub for version control and branching" />
                            </ListItem>

                        </List>

                        <Box
                            component="img"
                            src={portfolioPic}
                            alt="portfolio project"
                            sx={{
                                width: '100%',
                                height: 350,
                                objectFit: 'cover',
                                borderRadius: 3,
                            }}
                        />


                    </Stack>
                </Box>

                <Box sx={{ 
                        width: 450,
                        border: '2px solid purple',
                        borderRadius: 4,
                        padding: 2,
                        display: 'flex',
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={4}

                    >
                        <Typography variant='h5'>
                            ContextLense - Frontend 
                        </Typography>

                        <Typography 
                            variant='body1'
                            sx={{
                                textAlign: 'left'
                            }}
                        >
                            A web application that helps users understand short video 
                            clips in their original context. Users provide a short clip 
                            and the original video, and ContextLens finds where the clip 
                            appears, transcribes the speech, and shows what was said before 
                            and after.
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemText primary="• React + JavaScript" />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="• Material UI (MUI) for responsive UI design" />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="• React Router for page navigation" />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="• HTML/CSS for structure and custom styling" />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="• Git/GitHub for version control and collaboration" />
                            </ListItem>
                        </List>

                        <Box
                            component="img"
                            src={contextLensPic}
                            alt="ContextLens project"
                            sx={{
                                width: '100%',
                                height: 250,
                                objectFit: 'cover',
                                borderRadius: 3,
                            }}
                        />

                    </Stack>

                </Box>
            
            </Stack>
        </Box>

    )
}

export default Projects