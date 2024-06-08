import React from "react";
import {useState} from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Box, Typography } from "@mui/material";

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState({state: 'init', message : ''});

    // INIT

    // Loading

    // Success

    // **** ERROR **** //
    // Invalid Email
    // Email not found in system
    // Password does not match
    // Network connection error

    function handleEmail (e) {
        setEmail(e.target.value);
    }

    function handlePassword (e) {
        setPassword(e.target.value);
    }

    function handleLogin (e) {
        
        // Email Validity Check
        // Email exist check in store
        // Password match 
        // Pass or Failed
    }

    return (
        <Box autoComplete="off" component="form" className="login-window">
            <p className="title">CAP</p>
            <FormControl className="login-text-field">
                <TextField fullWidth id="email" label="Email" variant="outlined" onChange={handleEmail} type='email' required />
            </FormControl>
            <FormControl className="login-text-field">
                <TextField fullWidth id="password" label="Password" type="password" variant="outlined" onChange={handlePassword} />
            </FormControl>
            <button className="login-btn" onClick={handleLogin}>LOG IN</button>
        </Box>
    )
}