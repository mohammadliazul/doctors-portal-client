import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { Box } from '@mui/material';


export default function Calendar({date, setDate}) {

  return (
    <Box>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        </LocalizationProvider>
    </Box>
  );
}
