import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { Box } from '@mui/material';


export default function Calendar({date, setDate}) {


  return (
    <Box>
        <LocalizationProvider    dateAdapter={AdapterDayjs}>
          <CalendarPicker  date={date} onChange={(newDate) => setDate(newDate)} />
        </LocalizationProvider>
    </Box>
  );
}
