import { useState } from "react"

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState({state: '', message : ''});



    // INIT

    // Loading

    // Success

    // **** ERROR **** //
    // Invalid Email
    // Email not found in system
    // Password does not match
    // Network connection error

    return (
        <div>
            <p>Login works!</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}