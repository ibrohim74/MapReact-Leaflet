import React from 'react';
import {win} from "leaflet/src/core/Browser";
import Layouts from "../../components/layoutNav";
import RouterS from "../../components/routerS";
import {NavLink} from "react-router-dom";
import "../../css/login.css"

const arrUser =[
    {user:"test", pass:"test"},
    {user:"test1", pass:"test"},
    {user:"test2", pass:"test"},
]

function submit() {
    let value = document.getElementById("username").value;
    let value1 = document.getElementById("password").value;

    for (let i = 0; i <arrUser.length ; i++) {
        if (value === arrUser[i].user){
            if (value1 === arrUser[i].pass){

                window.location.assign("/leafletMap")

            }else {console.log("username: success,  password error")}
        }else {console.log("username error")}
    }
}

function SignIn(props) {


    return (
        <div>

            <div className="containerS">
                <div className="screenS">
                    <div className="screen__contentS">
                        <div className="loginS">
                            <div className="login__fieldS">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__inputS" placeholder="User name / Email" id="username"/>
                            </div>
                            <div className="login__fieldS">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__inputS" placeholder="Password" id="password"/>
                            </div>
                            <button type="submit" className="button login__submitS" onClick={submit} >
                                <span className="button__textS">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className="social-loginS">
                            <h3>log in via</h3>
                            <div className="social-iconsS">
                                <a href="#" className="social-login__iconS fab fa-instagram"> </a>
                                <a href="#" className="social-login__iconS fab fa-facebook"></a>
                                <a href="#" className="social-login__iconS fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen__backgroundS">
                        <span className="screen__background__shapeS screen__background__shape4S"> </span>
                        <span className="screen__background__shapeS screen__background__shape3S"></span>
                        <span className="screen__background__shapeS screen__background__shape2S"></span>
                        <span className="screen__background__shapeS screen__background__shape1S"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;