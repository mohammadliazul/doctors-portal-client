import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#F6F7F9',
      color: 'inherit',
      fontSize: 16,
      fontWeight: 700,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(sl, date, time, name, contact, prescription, action) {
    return { sl, date, time, name, contact, prescription, action };
  }
  const date= new Date().toLocaleDateString();
  const day = date.split('/')[1];
  const month = date.split('/')[0];
  const year = date.split('/')[2];
  const todayDate = `${day}-${month}-${year}`;

  const rows = [
    createData('01', todayDate,'3:00 PM', 'Bornil Megha', '+01700223366', 'Not Added', 'Pending'),
    createData('02', todayDate,'3:00 PM', 'Shahjadi Simu', '+01700223366', 'View', 'Pending'),
    createData('03', todayDate,'3:00 PM', 'Akash Ahmed', '+01700223366', 'View', 'Approved'),
    createData('04', todayDate,'3:00 PM', 'Karim Jabed', '+01700223366', 'View', 'Pending'),
    createData('05', todayDate,'3:00 PM', 'Meherin Maya', '+01700223366', 'Not Added', 'Cancelled'),
    createData('06', todayDate,'3:00 PM', 'Rajkumar Raj', '+01700223366', 'View', 'Pending'),
    createData('07', todayDate,'3:00 PM', 'Nilima Kanta', '+01700223366', 'View', 'Pending'),
    createData('08', todayDate,'3:00 PM', 'Rodela Bikel', '+01700223366', 'View', 'Pending'),
    createData('09', todayDate,'3:00 PM', 'Angel Santa', '+01700223366', 'View', 'Pending'),
    createData('10', todayDate,'3:00 PM', 'Rimjhim Borsha', '+01700223366', 'View', 'Pending'),

  ];


const DashboardHome = () => {
    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backgroundColor: '#D05871', borderRadius: '5px', padding: '25px'}}>
                        <Typography variant='h2' sx={{fontWeight: 600}}>09</Typography>
                        <Box sx={{padding: '0 0 0 25px'}}>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Pending</Typography>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Appointments</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backgroundColor: '#719CEF', borderRadius: '5px', padding: '25px'}}>
                        <Typography variant='h2' sx={{fontWeight: 600}}>19</Typography>
                        <Box sx={{padding: '0 0 0 25px'}}>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Today's</Typography>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Appointments</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backgroundColor: '#70C68A', borderRadius: '5px', padding: '25px'}}>
                        <Typography variant='h2' sx={{fontWeight: 600}}>34</Typography>
                        <Box sx={{padding: '0 0 0 25px'}}>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Total</Typography>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Appointments</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backgroundColor: '#E3A538', borderRadius: '5px', padding: '25px'}}>
                        <Typography variant='h2' sx={{fontWeight: 600}}>78</Typography>
                        <Box sx={{padding: '0 0 0 25px'}}>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Total</Typography>
                            <Typography variant='body1' sx={{fontWeight: 500}}>Patients</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

{/*------------------------------------- 
                Table 
------------------------------------ */}
            <Box sx={{mt: 7}}>
                <Typography variant='h5' sx={{color: '#19D3AE', fontWeight: 600, mb: 1}}>Recent Appointments</Typography>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700, backgroundColor: '#F6F7F9 !important' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Sr. No</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Time</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Contact</StyledTableCell>
                                <StyledTableCell align="center">Prescription</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.sl}>
                                <StyledTableCell>{row.sl}</StyledTableCell>
                                <StyledTableCell align="center">{row.date}</StyledTableCell>
                                <StyledTableCell align="center">{row.time}</StyledTableCell>
                                <StyledTableCell align="center">{row.name}</StyledTableCell>
                                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                                <StyledTableCell align="center">{row.prescription}</StyledTableCell>
                                <StyledTableCell align="center">{row.action}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default DashboardHome;