import React from 'react';
import { Link, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Navbar.css'

const Navbar = (props) => (
    <div className="navbar">
            <Link className="link" to="/">
                <Button id="leftbutton" className="button" variant="contained" color="#FFFFFF">
                    Home
                </Button>
            </Link>
            <Link className="link" to="/createpost">
                <h1 className="title">{props.title}</h1> 
            </Link>
            <Link className="link" to="/viewpost">
                <Button id="rightbutton" className="button" variant="contained" color="#FFFFFF">
                    Show Love ❤
                </Button>
            </Link>
        </div>
);

export default Navbar;