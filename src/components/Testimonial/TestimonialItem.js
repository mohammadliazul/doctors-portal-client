import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import { Box, CardMedia, Grid} from '@mui/material';

const TestmonialItem = (props) => {
    const {name, address, description, img} = props?.item;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, paddingTop: 3, boxShadow: '3px 4px 10px 2px rgba(0, 0, 0, 0.05)'}}>
                <CardContent >
                    <Typography variant="body1" >
                        {description}
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', p:3,}}>
                    <Box sx={{borderRadius: '50%', border: '3px solid #19D3AE', mr: 4}}>
                        <CardMedia
                            component="img"
                            sx={{width: 'auto', height: '80px', margin: '0 auto' }}
                            image={img}
                            alt="service image"
                        />
                    </Box>
                    <Box >
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="substitle1" component="div">
                            {address}
                        </Typography>
                    </Box>
                </Box>
                
            </Card>
        </Grid>
    );
};

export default TestmonialItem;