import React from 'react';
import { Link, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Navbar.css'


function Navbar() {
    return (
        <div className="navbar">
            <Button variant="contained" color="primary">
                <Link to="/createpost">I need some love</Link>
            </Button>
            <h1 className="title">Welcome</h1>
            <Button variant="contained" color="primary">
                <Link to="/viewpost">Cheer someone up!</Link>
            </Button>
        </div>
    )
}

export default Navbar;