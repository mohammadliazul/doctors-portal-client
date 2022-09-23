import React, { useEffect, useState } from 'react';
import {Box, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <Typography variant="h6">Appointments ({appointments?.length})</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Schedule</TableCell>
                    <TableCell align="right">Service</TableCell>
                    <TableCell align="right">Action</TableCell>
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
                      <TableCell align="right">{appointment.time}</TableCell>
                      <TableCell align="right">{appointment.serviceName}</TableCell>
                      <TableCell align="right">{appointment.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Box>
    );
};

export default AppointmentTotal;