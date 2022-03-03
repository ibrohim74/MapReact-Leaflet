import React, {useState} from 'react';
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import {auth} from "./fireBase";

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
    return (
        <div>
            <input type="email" onChange={(event ) =>{setRegisterEmail(event.target.value)}} placeholder={"Email"}/>
            <input type="password" onChange={(event ) =>{setRegisterPassword(event.target.value)}} placeholder={"Password"}/>
            <button onClick={register}>Registratsiya</button>
           <h4>{user?.email}</h4>
        </div>
    );
}

export default SignUp;