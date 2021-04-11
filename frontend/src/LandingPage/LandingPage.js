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
                <div>
                    <h1>Venti</h1>
                </div>
                <div>
                    <h1>Welcome! 😊</h1>
                </div>
                <div id="LandingPageFooter" style={style.LandingPageFooter}>

                        <Link style={style.RegisterButtonLink} to="/register">
                            <button style={style.RegisterButton}>Register</button>
                        </Link>
                   
         
                        <Link style={style.LoginButtonLink} to="/login">
                            <button style={style.LoginButton}>Login</button>
                        </Link>
         
                </div>
            </div>
        )
    }

}

const style = {
    LandingPageFooter : {
        position: 'absolute',
        bottom: 0,
        height: 100,
        width: "100%",
    },
    LandingPageAuthButton:{
        position: "absolute",
        display: "inline-block"
    },
    RegisterButtonLink:{
        position: "absolute",
        left: 20,
    },
    LoginButtonLink:{
        position: "absolute",
        right: 20,
    },
    RegisterButton:{
        top: 0,
        width: 100,
        height: 100
    },
    LoginButton:{
        top: 0,
        width: 100,
        height: 100
    }
    
}

export default LandingPage;