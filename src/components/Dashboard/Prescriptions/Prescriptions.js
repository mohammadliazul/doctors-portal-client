import React from 'react';
import { Box, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MuiButton from '../../styledComponent/MuiButton';


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
  
  function createData(sl, date, name, contact, prescription) {
    return { sl, date, name, contact, prescription };
  }
  const date= new Date().toLocaleDateString();
  const day = date.split('/')[1];
  const month = date.split('/')[0];
  const year = date.split('/')[2];
  const todayDate = `${day}-${month}-${year}`;

  const rows = [
    createData('01', todayDate, 'Bornil Megha', '+01700223366', 'View'),
    createData('02', todayDate, 'Shahjadi Simu', '+01700223366', 'View'),
    createData('03', todayDate, 'Akash Ahmed', '+01700223366', 'View'),
    createData('04', todayDate, 'Karim Jabed', '+01700223366', 'View'),
    createData('05', todayDate, 'Meherin Maya', '+01700223366', 'View'),
    createData('06', todayDate, 'Rajkumar Raj', '+01700223366', 'View'),
    createData('07', todayDate, 'Nilima Kanta', '+01700223366', 'View'),
    createData('08', todayDate, 'Rodela Bikel', '+01700223366', 'View'),
    createData('09', todayDate, 'Angel Santa', '+01700223366', 'View'),
    createData('10', todayDate, 'Rimjhim Borsha', '+01700223366', 'View'),
  ];

const Prescriptions = () => {
    return (
        <Box>
            <Typography variant='h5' sx={{color: '#19D3AE', fontWeight: 600, mb: 1}}>All Prescriptions</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700, backgroundColor: '#F6F7F9 !important' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sr. No</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">Prescription</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.sl}>
                            <StyledTableCell>{row.sl}</StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.contact}</StyledTableCell>
                            <StyledTableCell align="center"><MuiButton sx={{p:'6px 10px  !important', textTransform: 'inherit'}}>{row.prescription}</MuiButton> </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Prescriptions;