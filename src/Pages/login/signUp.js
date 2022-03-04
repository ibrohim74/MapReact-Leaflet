import React, {useState} from 'react';
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import {auth} from "./fireBase";
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";

function SignUp({history}) {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [username , setUsername] = useState("")
    const [user,setUser] = useState({})

    onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
    })
    const register = async () =>{
        try {
            const user =await createUserWithEmailAndPassword(auth, registerEmail,registerPassword,username)
            console.log(user)
            history.push('/layouts/leafletMap')
        }catch (e) {
            console.log(e.message)
        }

    }
    const [values, setValues] = useState({
        password:"",
        showPassword:false
    })
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div>
           {/* <input type="email" onChange={(event ) =>{setRegisterEmail(event.target.value)}} placeholder={"Email"}/>*/}
           {/* <input type="password" onChange={(event ) =>{setRegisterPassword(event.target.value)}} placeholder={"Password"}/>*/}
           {/* <button onClick={register}>Registratsiya</button>*/}
           {/*<h4>{user?.email}</h4>*/}



            <div className="containerS">
                <div className="screenS">
                    <div className="screen__contentS">
                        <div className="loginS">
                            <h1>SignUp</h1>
                            <h3 className="errorM">Hatolik yuzaga keldi qaytadan urinib koring</h3>
                            <div className="login__fieldS">
                                <i className="login__icon fas fa-user"></i>
                                <input type="email"
                                       className="login__inputS" placeholder=" Email"
                                       onChange={(event ) =>{setRegisterEmail(event.target.value)}}
                                />


                            </div>
                            <div className="login__fieldS">
                                <i className="login__icon fas fa-lock"></i>
                                <input type={values.showPassword ? "text":"password"}
                                       className="login__inputS"
                                       placeholder="Password"
                                       onChange={(event ) =>{setRegisterPassword(event.target.value)}}

                                /><span onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}
                                        style={{fontSize:"20px"}}
                            >
                                {values.showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                            </div>
                            <button type="submit" className="button login__submitS" onClick={register} >
                                <span className="button__textS">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            {user?.email}
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

export default SignUp;