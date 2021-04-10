import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css'

function Login() {
    return (
        <div className="inputForm">
            <h1>Login</h1>
            <form autoComplete="off">
                <TextField required id="outlined-basic" label="Username" variant="outlined" helperText="Required" />
                <TextField required id="outlined-basic" label="Password" variant="outlined" helperText="Required" />
            </form>
            <Button>Submit</Button>
        </div>
    )
}

export default Login;