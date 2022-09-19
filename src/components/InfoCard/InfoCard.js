import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { infoData } from '../../data/data';

const InfoCard = () => {
    return (
        <Box >
            <Container>
                <Grid container spacing={3} sx={{marginTop: '-80px'}}>
                    {
                        infoData.map(({Icon, title, description, background})=>
                            <Grid key={title} item xs={12} sm={6} md={4}>
                                <Paper elevation={0} sx={{display: 'flex', justifyContent: 'space-between', background: background, color: '#fff', p: 3}}>
                                    <Icon sx={{fontSize: 60}}/>
                                    <div>
                                        <Typography variant='body1' sx={{fontSize:'20px', lineHeight: '27px',fontWeight:700}}>{title}</Typography>
                                        <Typography variant='subtitle1' sx={{fontSize:'16px',fontWeight:400, }}>{description}</Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            )
                    }

                </Grid>
            </Container> 
        </Box> 
    );
};

export default InfoCard;