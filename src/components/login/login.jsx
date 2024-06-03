import React from "react";
import {useState} from "react";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

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

    function handleLogin (e) {

    }

    function handleEmail (e) {
        setEmail(e.target.value);
    }

    function handlePassword (e) {
        setPassword(e.target.value);
    }

    return (
        <form noValidate autoComplete="off">
            <FormControl sx={{ width: '25ch' }} required>
                <TextField id="email" label="Email" variant="standard" onChange={handleEmail} type='email' />
            </FormControl>
            <FormControl>
                <TextField id="password" label="Password" type="password" variant="standard" />
            </FormControl>
            <button className="referral-button" style={{color: 'white'}} onClick={handleLogin}>LOG IN</button>
        </form>
    )
}