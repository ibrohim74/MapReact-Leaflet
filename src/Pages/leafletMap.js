import React,{useState} from 'react';
import {Map, TileLayer} from "react-leaflet/es/index"
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./../index.css"


const LeafletMap = () =>{
    const [center, setCenter] = useState({ lat: 41.311081, lng: 69.240562 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
        return(
            <>
                <Map
                    center={center}
                    zoom={ZOOM_LEVEL}
                    ref={mapRef}
                >

                    <TileLayer url={"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=BQ7Tkd3bApia7yVhAuC7"}
                               attribution={'&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}/>
                </Map>
            </>
        )
}

export default LeafletMap;