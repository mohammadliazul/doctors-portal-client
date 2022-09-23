import { Alert, Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../styledComponent/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };
        fetch('http://localhost:5000/users/make-admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                setSuccess(true);
                setEmail('');
            }
        })
    }
    return (
        <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Box>
                <Typography variant='h5' sx={{fontWeight: 600, textAlign: 'center', mb: 5}}>Make an Admin</Typography>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <MuiButton type="submit" >Make Admin</MuiButton>
                </form>
                {success && <Alert severity="success" sx={{mt:3}}>Made Admin successfully!</Alert>}
            </Box>
        </Box>
    );
};

export default MakeAdmin;