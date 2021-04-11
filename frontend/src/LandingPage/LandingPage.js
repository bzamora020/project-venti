import React from 'react';
import { Link, Route } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="LandingPageContainer" style={{height:"100%"}}>
                <div style = {style.banner}>
                    <div style = {style.logo}>
                        <h1>VENTi</h1>
                    </div>
                    <h1 style = {style.phrase}>"The place to vent your feeling with similar people"</h1>

                    <div style = {style.welcome}>
                        <h1>Welcome! 😊</h1>
                    </div>
                </div>
                <div id="LandingPageFooter" style={style.LandingPageFooter}>

                        <Link style={style.RegisterButtonLink} to="/register">
                            <button class = "button" style={style.button}>Register</button>
                        </Link>
                        <br></br>
         
                        <Link style={style.LoginButtonLink} to="/login">
                            <button  style={style.button}>Login</button>
                        </Link>
         
                </div>
            </div>
        )
    }

}

const style = {
    LandingPageFooter : {
        height: 100,
        width: "100%",
    },
    LandingPageAuthButton:{
        position: "absolute",
        display: "inline-block"
    },
    RegisterButtonLink:{
        left: 20,
    },
    LoginButtonLink:{
        right: 20,
    },
    button:{
        top:0,
        textDecoration:"none",
        display:"inline-block",
        marginBottom: "20px",
        width: 250,
        backgroundColor: "#FFE06A",
        height: 50,
        border:"none",
        borderRadius: "5px",

    },
    banner:{
        
        fontFamily: 'Karla',
    },
    logo:{
        color: "#37A1DD",
        fontSize: "85px",
        marginBottom:"10px"
    },
    welcome:{
        padding:0,
    },
    phrase:{
        fontSize:"15px",
    }
    
}

export default LandingPage;