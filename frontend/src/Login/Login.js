import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css'

function Login() {
    return (
        <div className="inputForm">
            <form autoComplete="off">
                <TextField required id="filled-basic" defaultValue="Small" label="Username" variant="filled" helperText="Required" size="small" />
                <TextField required id="filled-basic" label="Password" variant="filled" helperText="Required" size="small" />
            </form>
        </div>
    )
}

export default Login;