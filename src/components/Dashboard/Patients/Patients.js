import { Box, Typography } from '@mui/material';
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
  
  function createData(sl, name, gender, age, weight, contact, address ) {
    return { sl, name, gender, age, weight, contact, address };
  }

  const rows = [
    createData('01', 'Bornil Megha', 'Female', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('02', 'Shahjadi Simu', 'Female', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('03', 'Akash Ahmed', 'Male', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('04', 'Karim Jabed', 'Male', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('05', 'Meherin Maya', 'Female', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('06', 'Rajkumar Raj', 'Male', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('07', 'Nilima Kanta', 'Female', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('08', 'Rodela Bikel', 'Female', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('09', 'Angel Santa', 'Female', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
    createData('10', 'Rimjhim Borsha', 'Female', 20, '50kg', '+01700223366', 'South Gazirchar, Savar, Dhaka'),
  ];

const Patients = () => {
    return (
        <Box sx={{mt: 7}}>
            <Typography variant='h5' sx={{color: '#19D3AE', fontWeight: 600, mb: 1}}>All Patients</Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700, backgroundColor: '#F6F7F9 !important' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sr. No</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Gender</StyledTableCell>
                            <StyledTableCell align="center">Age</StyledTableCell>
                            <StyledTableCell align="center">Weight</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.sl}>
                            <StyledTableCell>{row.sl}</StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.gender}</StyledTableCell>
                            <StyledTableCell align="center">{row.age}</StyledTableCell>
                            <StyledTableCell align="center">{row.weight}</StyledTableCell>
                            <StyledTableCell align="center">{row.contact}</StyledTableCell>
                            <StyledTableCell align="center">{row.address}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Patients;