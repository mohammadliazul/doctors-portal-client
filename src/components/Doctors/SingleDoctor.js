import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';

const SingleDoctor = ({doctor}) => {
    const {name, phone, image} = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ minWidth: 275, textAlign: 'center', paddingTop: 3, my: 4}}>
                <CardMedia
                    component="img"
                    sx={{width: '100%'}}
                    image={`data:image/*;base64, ${image}`}
                    alt="doctor image"
                />
                <CardContent >
                    <Typography variant="h5" component="div" sx={{color: '#3A4256', fontWeight: 600}}>
                        {name}
                    </Typography>
                    <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8C8997', mt:1}}>
                        <PhoneIcon sx={{color: '#19D3AE'}}/>&nbsp;+{phone}
                    </Typography>
                </CardContent>
            </Box>
        </Grid>
    );
};

export default SingleDoctor;