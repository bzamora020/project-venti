import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Register() {
    return (
    <div className="inputForm">
        <h1>Register</h1>
        <form autoComplete="off">
            <TextField className="registerInput" required id="outlined-basic" label="Username" variant="outlined" helperText="Required" />
            <TextField className="registerInput" required id="outlined-basic" label="Password" variant="outlined" helperText="Required" />
            <TextField className="registerInput" required id="outlined-basic" label="Phone Number" variant="outlined" helperText="Required" />
        </form>
        <Button>Submit</Button>
    </div>
    )
}

export default Register;