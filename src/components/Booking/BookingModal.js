import React,  { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import MuiButton from '../styledComponent/MuiButton';
import useAuth from '../../hooks/useAuth';

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

const BookingModal = ({open, handleClose, date, booking, setBookingSuccess}) => {

    const {name, time} = booking;
    const {user} = useAuth();

    const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // collect data 
        const appointment = {
            ...bookingInfo,
            serviceName: name,
            time,
            date:new Date(date).toLocaleDateString(),
        }
        // console.log(appointment);

        // send to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setBookingSuccess(true);
                handleClose();
            }
        });
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
                <TextField fullWidth size='small' margin='dense'required value={time} disabled></TextField>
                <TextField fullWidth size='small' margin='dense'required value={new Date(date).toDateString()} disabled></TextField>
                <TextField name='patientName' onBlur={handleOnBlur} fullWidth size='small' margin='dense'required defaultValue={user?.displayName} placeholder='Full Name'></TextField>
                <TextField name='phone' onBlur={handleOnBlur} fullWidth size='small' margin='dense'required placeholder='Phone Number'></TextField>
                <TextField name='email' inputProps={{ style: { textTransform: "lowercase" }}} onBlur={handleOnBlur} fullWidth size='small' margin='dense'required placeholder='Email' defaultValue={user?.email}></TextField>
                <MuiButton variant="contained" type="submit" sx={{ mt: 1 }}>Submit</MuiButton>
                </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;