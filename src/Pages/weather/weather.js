import React, { useState } from 'react';
import "../../css/wether.css"
import {Map, TileLayer,Marker,Popup} from "react-leaflet"
import { GoHome } from "react-icons/go";
import L from 'leaflet';
import Search from "react-leaflet-search";
export const VenueLocationIcon = L.icon({
    iconUrl: require('../../resources/images/logo2.png'),
    iconRetinaUrl: require('../../resources/images/logo2.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
});
const api = {
    key: "0f201ceb17dfa8c740969ba7387cb729",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [coord ,setCoord] = useState([])

    const position = [41.311081,69.240562]
    // const positionW = [weatherLat,weatherLon]
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    setCoord([weather.coord.lat,weather.coord.lon])
                    console.log(result);
                    console.log(weather.coord.lat)
                });
        }
    }
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (<div className="searchApp">
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
                {/*{(weather)=>(*/}
                {/*    <Marker position={[weather.lat, weather.lon]} icon={VenueLocationIcon}>*/}

                {/*    </Marker>*/}
                {/*)}*/}
            </div>
            {/*<Map style={{height: "100vh", position:"relative"}} zoom={12} center={[ 41.311081,69.240562]}>*/}
            <main>


                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}
            </main>
                {/*<Marker position={[coord]}/>*/}
                {/*<TileLayer url={"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=BQ7Tkd3bApia7yVhAuC7"}*/}
                {/*           attribution={'&copy; <a href="">MapTiler</a> &copy; <a href="">OpenStreetMap</a> contributors'}/>*/}


                           {/*<Search*/}
                           {/*    position="topleft"*/}
                           {/*    inputPlaceholder="Custom placeholder"*/}
                           {/*    // search={this.state.search}*/}
                           {/*    showMarker={false}*/}
                           {/*    zoom={7}*/}
                           {/*    closeResultsOnClick={true}*/}
                           {/*    openSearchOnLoad={false}*/}

                           {/*>*/}
                           {/*    {(info) => (*/}
                           {/*        <Marker position={info?.}>{position}</Marker>*/}
                           {/*    )}*/}
                           {/*</Search>*/}
                {/*<Marker position={position} icon={VenueLocationIcon}>*/}
                {/*    <Popup>*/}
                {/*        salom*/}
                {/*    </Popup>*/}
                {/*</Marker>*/}

            {/*</Map>*/}

        </div>

    );
}

export default Weather;