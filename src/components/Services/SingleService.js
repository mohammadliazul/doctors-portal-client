import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import { CardMedia, Grid} from '@mui/material';

const SingleService = (props) => {
    const {title, description, img} = props?.service;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, textAlign: 'center', paddingTop: 3, boxShadow: '3px 4px 10px 2px rgba(0, 0, 0, 0.05)'}}>
                <CardMedia
                    component="img"
                    sx={{width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="service image"
                />
                <CardContent >
                    <Typography variant="h6" component="div" sx={{mb: 1, color: '#3A4256', fontWeight: 600}}>
                        {title}
                    </Typography>
                    <Typography variant="body1" textAlign='center' color='#8C8997'>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SingleService;