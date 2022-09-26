import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../../shared/Calendar';
import AppointmentTotal from './AppointmentTotal';

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Grid container spacing={2}>
          <Grid xs={12} item sm={12} md={6} lg={4}>
              <Calendar
                style={{marginTop: '0px !important'}}
                date={date}
                setDate={setDate}
              >
              </Calendar>

          </Grid>
          <Grid xs={12} item sm={12} md={6} lg={8}>
            <AppointmentTotal date={date}></AppointmentTotal> 
          </Grid>
        </Grid>
    );
};

export default Appointments;