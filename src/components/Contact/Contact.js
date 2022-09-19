import { Box, Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import bgImg from '../../assets/images/bg-blue.png';
import MuiButton from '../styledComponent/MuiButton';

const useStyle = makeStyles({
    root: {
        background: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        textAlign: 'center',
        padding: '30px 0'
    },
    textArea: {
        border: 0,
        outline: 0,
        width: '100%',
        margin: '20px 0',
        borderRadius: 3,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        padding: 15
    },
    inputField: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: 0, // customized
            }
          }
    }
})

const Contact = () => {

    
    
    
    const {root, textArea, inputField} = useStyle()
    return (
        <Box className={root}>
            <Box marginY='30px'>
                <Container maxWidth='md'>
                    <Typography variant='h6' sx={{color: '#19D3AE', fontSize: '18px', lineHeight: '27px', fontWeight: 700}}>
                        Contact Us
                    </Typography>
                    <Typography variant='h4' sx={{color: '#fff', fontSize: '34px', lineHeight: '49px', fontWeight: 500,}} >
                        Stay connected with us
                    </Typography>
                    <TextField  className={inputField} fullWidth placeholder='Email' required margin='normal' sx={{backgroundColor: '#fff', borderRadius: 1, border: 0, outline: 0}}/>
                    <TextField className={inputField} fullWidth placeholder='Subject' required  margin='normal' sx={{backgroundColor: '#fff', borderRadius: 1, outline: 0}}/>
                    <textarea className={textArea} name="" id="" cols="30" rows="10" fullWidth placeholder='Your message' required  sx={{backgroundColor: '#fff', borderRadius: 1}}></textarea>
                    <MuiButton>Submit</MuiButton>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;