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
import IndexW from "../Pages/weather/weather-app-main/src/indexW";
// import {IoWaterOutline} from "react-icons";

function LayoutNav() {
    return (<>


        <div className="mainL">

            <div className="sidebar">
                <div className="brand">
                    <a href={"/"}><img src={require("../resources/images/logo2.png")} alt=""/><br/>
                        <p>Yaylov.uz</p>
                    </a>
                </div>
                <ul className="listL">
                    <hr/>
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
                    <li><a href={'/layouts/test'}><SiMinetest style={{color: "#343434"}}/></a></li>
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
                    <LeafletTest/>
                </Route>
                <Route path={'/layouts/plant'}>
                    <Plant/>
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