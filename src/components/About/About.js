import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../assets/images/treatment.png';
import MuiButton from '../styledComponent/MuiButton';

const aboutTitle={
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '44px',
    lineHeight: '65px',
    color: '#3A4256',
}

const imgStyle = {
    borderRadius: 8,
    width: '100%',
}

const About = () => {
    return (
        <Box sx={{padding: '100px 0 40px'}}>
            <Container >
                <Grid container spacing={10} >
                    <Grid item xs={12} sm={5} md={5} lg={5}>
                        <img style={imgStyle} src={treatment} alt="about me img" />
                    </Grid>
                    <Grid sx={{display: 'flex', alignItems: 'center'}} item xs={12} sm={7} md={7} lg={7}>
                        <Box>
                            <Typography variant='h3' style={aboutTitle}>
                            Exceptional Dental Care, on Your Terms
                            </Typography>
                            <Typography variant='body1' sx={{mt: 3, mb: 4, textAlign: 'justify'}}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                            </Typography>
                            <MuiButton>GET STARTED</MuiButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;