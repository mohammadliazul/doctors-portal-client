import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../../styledComponent/MuiButton';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('image', image);

        fetch(`${process.env.REACT_APP_SERVER_API}/doctors`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully');
                    setName('');
                    setPhone('');
                    setImage(null);
                    // console.log('doctor added successfully')
                }
            })
            .catch(error => {
                setSuccess('');
                console.error('Error:', error);
            });
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box>
                <Typography variant='h5' sx={{color: '#0FCFEC', textAlign: 'center', fontWeight: 600, my: 4}}>Add A Doctor</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{ width: {xs: '100%', sm: '100%', md: '400px', lg: '400px'} }}
                        label="Name"
                        margin='dense'
                        required
                        onChange={e => setName(e.target.value)}
                        variant="outlined" />
                    <br />
                    <TextField
                        sx={{width: {xs: '100%', sm: '100%', md: '400px', lg: '400px'} }}
                        label="Phone"
                        type="number"
                        margin='dense'
                        required
                        onChange={e => setPhone(e.target.value)}
                        variant="outlined" />
                    <br />
                    <input
                        style={{margin: '14px 0 16px 0'}}
                        placeholder= "picture"
                        accept="image/*"
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <br />
                    <MuiButton variant="contained" type="submit" sx={{mb: 3}}>
                        Add Doctor
                    </MuiButton>
                </form>
                {success && <span style={{color: '#4CAF50', backgroundColor: '#EDF7ED', padding: '6px 10px', borderRadius: '2px'}}>{success}</span>}
            </Box>
        </Box>
    );
};

export default AddDoctor;