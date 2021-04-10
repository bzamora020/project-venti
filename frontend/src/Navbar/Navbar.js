import React from 'react';
import { Link, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <Button id="leftbutton" className="button" variant="contained" color="#FFFFFF">
                <Link className="link" to="/createpost">I need some love</Link>
            </Button>
            <h1 className="title">Venti</h1>
            <Button id="rightbutton" className="button" variant="contained" color="#FFFFFF">
                <Link className="link" to="/viewpost">Cheer someone up!</Link>
            </Button>
        </div>
    )
}
export default Navbar;