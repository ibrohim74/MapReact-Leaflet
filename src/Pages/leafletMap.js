import React, {Component,  useState} from 'react';
import { useRef } from "react";
import {Map, TileLayer, GeoJSON, withLeaflet,FeatureGroup,Marker,Popup} from "react-leaflet/es/index"

import geoJsonTest from "../data/geoJson"
import PrintControlDefault from "react-leaflet-easyprint";
// import {EditControl} from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import uz from "../data/uzbekistanPoliyLine"
import boston from "../data/bustonlik"
import L from "leaflet";
const PrintControl = withLeaflet(PrintControlDefault);



class LeafletMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            positions:[],
            mapLayer:[],
            mapRef:{}
        }
    }
     VenueLocationIcon = L.icon({
        iconUrl: require('../resources/images/logo2.png'),
        iconRetinaUrl: require('../resources/images/logo2.png'),
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [35, 35],
        className: 'leaflet-venue-icon'
    });
    componentDidMount() {
        if (navigator.geolocation) {
            // navigator.geolocation.watchPosition(function(position) {
            //
            //     console.log("Latitude is :", position.coords.latitude);
            //     console.log("Longitude is :", position.coords.longitude);
            //
            //
            // }
         //);
            navigator.geolocation.getCurrentPosition((position )=>{
                this.setState({positions:[position.coords.latitude+","+position.coords.longitude]})
                console.log("37 qator"+this.state.positions)
            })
        }
        console.log(boston)
        console.log("41 qator"+this.state.positions)
    }

    countryStyle = {
        fillColor: "green",
        fillOpacity: 0.1,
        color: "green"
    }
    uz={
        fillColor: "#202020",
        fillOpacity: 0,
    }
    onPoliygonClick = (event) => {
        console.log("clicked")
        event.target.setStyle({
            color: "black",
            fillColor: "red"
        })
    }
    onMouseOver = (event) => {

    }
    onEachFeature = (geoJsonTest, layer) => {
        const yaylovName = geoJsonTest.properties.Фойда;
        const polygonLength = geoJsonTest.properties.Майдо;
        const polygonHarvest = geoJsonTest.properties.Яйлов;
        layer.bindPopup("Yaylov name: " + yaylovName + "<br>" + "polygon length: " + polygonLength + " <br>" + "Polygon harvest: " + polygonHarvest)
        // console.log(polygonLength)


        layer.on({
            click: this.onPoliygonClick,

            // mouseover:this.onMouseOver
        })
    }

    render() {

const cord = this.state.positions;
        return (
            <div>
                <Map style={{height: "100vh"}} zoom={12} center={[41.58904074516491, 70.09696143022758]} >

                    <GeoJSON data={uz} style={this.uz}/>
                    <GeoJSON data={boston} style={this.countryStyle} onEachFeature={this.onEachFeature}/>
                    {/*<GeoJSON data={geoJsonTest} />*/}



                    <TileLayer url={"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=BQ7Tkd3bApia7yVhAuC7"}
                                    attribution={'&copy; <a href="">MapTiler</a> &copy; <a href="">OpenStreetMap</a> contributors'}/>


                    <PrintControl
                        ref={ref => {
                            this.printControl = ref;
                        }}
                        position="topright"
                        sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                        hideControlContainer={false}
                    />
                    <PrintControl
                        position="topright"
                        sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                        hideControlContainer={false}
                        title="Export as PNG"
                        exportOnly
                    />
                    {/*<Marker position={cord}>*/}
                    {/*    <Popup>*/}
                    {/*        sad*/}
                    {/*    </Popup>*/}
                    {/*</Marker>*/}
                </Map>
                {this.state.positions}
            </div>
        );
    }
}

export default LeafletMap;