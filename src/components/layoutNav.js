import React from 'react';
import "../css/layouts.css"
import {NavLink, Route} from "react-router-dom";
import LeafletMap from "../Pages/leafletMap";
import {GoHome} from "react-icons/go";
import {TiWeatherPartlySunny} from "react-icons/ti";
import {RiPlantLine} from "react-icons/ri";
import {SiMinetest} from "react-icons/si";
import Weather from "../Pages/weather/weather";
import LeafletTest from "../Pages/leafletTest";
import Plant from "../Pages/plant";
import {IoWaterOutline} from "react-icons/io5";
import {auth} from "../Pages/login/fireBase";
import {signOut} from "firebase/auth"
import Setting from "../Pages/setting";
import {AiOutlineSetting} from "react-icons/ai";
import Charts from "../Pages/Charts";
function LayoutNav() {
    const logout = async () =>{
        await signOut(auth)
    }
    return (<>


        <div className="mainL">
            <div className="sidebar">
                <div className="brand">
                    <a href={"/"}><img src={require("../resources/images/logo2.png")} alt=""/><br/>
                        <p>Yaylov.uz</p>
                    </a>
                </div>
                <ul className="listL">
                    <li><NavLink to='/layouts/leafletMap'><GoHome style={{color: "#343434"}} value={"karta"}/></NavLink>
                    </li>
                    <hr/>
                    <li><NavLink to={'/layouts/weather'}><TiWeatherPartlySunny style={{color: "#343434"}}/></NavLink>
                    </li>
                    <hr/>
                    <li><NavLink to={'/layouts/plant'}><IoWaterOutline style={{color: "#343434"}}/></NavLink></li>
                    <hr/>
                    <li><NavLink to={'/layouts/test'}><SiMinetest style={{color: "#343434"}}/></NavLink></li>
                    <hr/>
                    <li><NavLink to={'/layouts/setting'}><AiOutlineSetting style={{color: "#343434"}}/></NavLink></li>

                    {/*<li><button onClick={logout}>LogOut</button> </li>*/}
                </ul>
            </div>
            <div className="content">

                <Route path={'/layouts/leafletMap'}>
                    <LeafletMap/>
                </Route>
                <Route path={'/layouts/weather'}>
                    <Weather/>
                </Route>
                <Route path={'/layouts/test'}>
                    <Charts/>
                </Route>
                <Route path={'/layouts/plant'}>
                    <Plant/>
                </Route>
                <Route path={'/layouts/setting'}>
                    <Setting/>
                </Route>

            </div>
        </div>
        <div className="rotate"><h1>Sistemadan samarali foydalanish uchun telefoningizni qayiring </h1>
            <br/>
        <img src={require("../resources/images/rotating-mobile-phone-from-vertical-to-horizontal-position.png")} height={"40vh"}/>
        </div>
    </>);
}

export default LayoutNav;