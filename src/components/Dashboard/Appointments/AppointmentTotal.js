import React, { useEffect, useState } from 'react';
import {Box, Button, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const AppointmentTotal = ({date}) => {

    const {user, token} = useAuth();
    const [appointments, setAppointments] = useState([]);
  
    useEffect(()=> {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
          headers: {
            'authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[user.email, date, token])

    return (
        <Box>
            <Typography variant="h5" sx={{textAlign:'center', mt:2, mb:3, color: '#19D3AE', fontWeight:600}}>Appointments: {appointments?.length}</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight: 700}}>Name</TableCell>
                    <TableCell align="center" sx={{fontWeight: 700}}>Schedule</TableCell>
                    <TableCell align="center" sx={{fontWeight: 700}}>Service</TableCell>
                    <TableCell align="center" sx={{fontWeight: 700}}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow
                      key={appointment._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {appointment.patientName}
                      </TableCell>
                      <TableCell align="center">{appointment.time}</TableCell>
                      <TableCell align="center">{appointment.serviceName}</TableCell>
                      <TableCell align="center">{appointment.payment ? 
                        'Paid': 
                        <Link to={`/dashboard/payment/${appointment._id}`} style={{textDecoration: 'none'}}>
                          <Button variant='contained' 
                            sx={{
                            background: 'linear-gradient(90deg, #19D3AE, #0FCFEC)',
                            color: '#fff',
                            textTransform: 'inherit'
                            }}
                          >Pay
                          </Button>
                        </Link>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Box>
    );
};

export default AppointmentTotal;