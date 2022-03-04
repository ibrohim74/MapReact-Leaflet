import React, {useState} from 'react';
import "../css/setting.css"
import {onAuthStateChanged, signOut} from "@firebase/auth";
import {auth} from "./login/fireBase";
import {Link} from "react-router-dom";
function Setting({history}) {
    const [user,setUser] = useState({})

    onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
    })
    const logout = async () =>{

            await signOut(auth)

    }
    return (
        <div className="setting">
            <div className="hi">
               <h1>{user?.email || "siz profilingizdan chiqib ketdingiz \n iltimos qaytadan royhatdan oting"} <br/>
               </h1>
            </div>
            <div className="d-flex justify-content-around setting-item">
                <h3>Profildan chiqib ketish</h3>
                <a href={"/"}  onClick={logout} className="btn btn-success ">LogOut</a>
            </div>
            <div className="d-flex justify-content-around setting-item">
                <h3>Yangi profil ochish</h3>
                <a href="#/signUp" className="btn btn-success ">click</a>
            </div>
            <div className="d-flex justify-content-around setting-item">
                <h3>Eski profilga kirish</h3>
                <a href="#/signIn" className="btn btn-success ">click</a>
            </div>

        </div>
    );
}

export default Setting;