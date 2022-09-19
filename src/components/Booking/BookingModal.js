import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import MuiButton from '../styledComponent/MuiButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({open, handleClose, date, booking}) => {
const {name, time} = booking;
const handleSubmit = e => {
    e.preventDefault();
    handleClose();
    alert('Ok');

}

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <form onSubmit={handleSubmit}>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{color: '#19D3AE', textAlign: 'center', mb:1, fontWeight: 600}}>
                    {name}
                </Typography>
                <TextField fullWidth size='small' margin='dense'required value={time}></TextField>
                <TextField fullWidth size='small' margin='dense'required placeholder='Full Name'></TextField>
                <TextField fullWidth size='small' margin='dense'required placeholder='Phone Number'></TextField>
                <TextField fullWidth size='small' margin='dense'required placeholder='Email'></TextField>
                <TextField fullWidth size='small' margin='dense'required value={new Date(date).toDateString()}></TextField>
                <MuiButton variant="contained" type="submit" sx={{ mt: 1 }}>Submit</MuiButton>
                </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;