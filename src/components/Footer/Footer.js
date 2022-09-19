import { Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../styledComponent/MuiButton';
import bg from '../../assets/images/footer.png';
import { Box } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';

const footerBG = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'
}
const useStyle = makeStyles({
    socialIcon: {
        color: '#19D3AE !important',
        border: '1px solid #19D3AE !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#19D3AE !important',
            color: '#fff !important'
        }
    }
})

const Footer = () => {
    const { socialIcon } = useStyle();
    return (
        <Box style={footerBG} sx={{padding: '50px 0'}}>
            <Container>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box>
                        <Typography variant='h5' sx={{color: '#3A4256', fontWeight: 700, mb:'10px'}}>DOCTORS PORTAL</Typography>
                        <Typography variant='body1' sx={{textAlign: 'justify', }}>Doctors portal is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus similique ea hic accusantium sapiente sit possimus adipisci pariatur magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Typography variant='h6' sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700, mb: 2}}>
                        SERVICES
                    </Typography>
                    <ul>
                        <li><a href="/#">Emergency Checkup</a></li>
                        <li><a href="/#">Monthly Checkup</a></li>
                        <li><a href="/#">Weekly Checkup</a></li>
                        <li><a href="/#">Deep Checkup</a></li>
                    </ul>
                     {/* <List>
                        <ListItemText >Emergency Dental Care</ListItemText>
                        <ListItemText>Check Up</ListItemText>
                        <ListItemText>Treatment of Personal Diseases</ListItemText>
                        <ListItemText>Tooth Extraction</ListItemText>
                        <ListItemText>Check Up</ListItemText>
                        <ListItemText>Check Up</ListItemText>
                        <ListItemText>Check Up</ListItemText>
                    </List> */}
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Typography variant='h6' sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700, mb: 2}}>
                        ORAL HEALTH
                    </Typography>
                    <ul>
                        <li><a href="/#">Emergency Checkup</a></li>
                        <li><a href="/#">Monthly Checkup</a></li>
                        <li><a href="/#">Weekly Checkup</a></li>
                        <li><a href="/#">Deep Checkup</a></li>
                    </ul>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Typography variant='h6' sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700, mb: 2}}>
                        Our Address
                    </Typography>
                    <Typography variant='body1'>New York - 101010 Hudson </Typography>
                    {/* <ul style={{display: 'flex', margin: '10px 0'}}>
                        <li><a style={{color: '#19D3AE' , margin: '0'}} href="/#"><InstagramIcon/></a></li>
                        <li><a style={{color: '#19D3AE' , margin: '0 10px'}} href="/#"><TwitterIcon/></a></li>
                        <li><a style={{color: '#19D3AE' , margin: '0'}} href="/#"><FacebookOutlinedIcon/></a></li>
                    </ul> */}
                    <IconButton className={socialIcon}>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton className={socialIcon}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton className={socialIcon}>
                        <InstagramIcon />
                    </IconButton>
                    <Typography variant='h6'>Call Now</Typography>
                    <MuiButton>+8065432145</MuiButton>
                </Grid>
            </Grid>
            <Typography variant='body1' sx={{textAlign: 'center', mt:10}}>Copyright &copy; {new Date().getFullYear()} | Developed by <a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.linkedin.com/in/liazul/"> <span style={{color: '#0FCFEC', padding: '0 5px '}}> ❤ </span> Liazul</a> </Typography>
            </Container>
        </Box>
    );
};

export default Footer;