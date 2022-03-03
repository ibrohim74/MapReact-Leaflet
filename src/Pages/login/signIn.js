import React, {useState} from 'react';
import {win} from "leaflet/src/core/Browser";
import Layouts from "../../components/layoutNav";
import RouterS from "../../components/routerS";
import {NavLink} from "react-router-dom";
import "../../css/login.css"
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./fireBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";
import {SiTelegram} from "react-icons/si";


function SignIn({history}) {
    const [loginEmail,setLoginEmail] = useState();
    const [loginPassword,setLoginPassword] = useState();
    const [user,setUser] = useState({})
    const [values, setValues] = useState({
        password:"",
        showPassword:false
    })
    onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
    })
const login = async ()=>{
    try {
        const user =await signInWithEmailAndPassword(auth, loginEmail,loginPassword);
        console.log(user)
        history.push('/layouts/leafletMap')
    }catch (e) {
       const errorM = document.querySelector('.errorM')
        errorM.style.display = "block"
    }
}
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>

            <div className="containerS">
                <div className="screenS">
                    <div className="screen__contentS">
                        <div className="loginS">
                            <h3 className="errorM">Hatolik yuzaga keldi qaytadan urinib koring</h3>
                            <div className="login__fieldS">
                                <i className="login__icon fas fa-user"></i>
                                <input type="email"
                                       className="login__inputS" placeholder=" Email"
                                       onChange={(event ) =>{setLoginEmail(event.target.value)}}
                                />


                            </div>
                            <div className="login__fieldS">
                                <i className="login__icon fas fa-lock"></i>
                                <input type={values.showPassword ? "text":"password"}
                                       className="login__inputS"
                                       placeholder="Password"
                                       onChange={(event ) =>{setLoginPassword(event.target.value)}}

                                /><span onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}
                                    style={{fontSize:"20px"}}
                            >
                                {values.showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                            </div>
                            <button type="submit" className="button login__submitS" onClick={login} >
                                <span className="button__textS">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            {user?.email}
                        </div>
                        <div className="social-loginS">
                            <div className="social-iconsS">
                                <a href="#" className="social-login__iconS fab fa-instagram"><AiOutlineInstagram style={{color:"#dd3b77"}}/> </a>
                                <a href="#" className="social-login__iconS fab fa-facebook"><AiOutlineFacebook/></a>
                                <a href="#" className="social-login__iconS fab fa-twitter"><SiTelegram style={{color:"#27a5e4"}}/></a>
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