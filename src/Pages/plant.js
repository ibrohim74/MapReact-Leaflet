import React, {Component,  useState} from 'react';
import { useRef } from "react";
import {Map, TileLayer, GeoJSON, withLeaflet,FeatureGroup} from "react-leaflet/es/index"
import geoJsonTest from "../data/geoJson"
import PrintControlDefault from "react-leaflet-easyprint";
// import {EditControl} from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import uz from "../data/uzbekistanPoliyLine"
import boston from "../data/bustonlik"
import gidro from "../data/gidrography"
import ndvi from "../data/Bustonlik_yaylovNDVI"
const PrintControl = withLeaflet(PrintControlDefault);



class Plant extends Component {
    constructor(props){
        super(props);
        this.state = {
            mapLayer:[],
            mapRef:{}
        }
    }

    componentDidMount() {
        // console.log(testData)
        // console.log("uzData"+uzbData)
        console.log(boston)
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
        const poliId= geoJsonTest.id;
        layer.bindPopup("id"+poliId)
        // console.log(polygonLength)


        layer.on({
            click: this.onPoliygonClick,

            // mouseover:this.onMouseOver
        })
    }

    render() {


        return (
            <div>
                <Map style={{height: "100vh"}} zoom={12} center={[41.58904074516491, 70.09696143022758]} >

                    <GeoJSON data={uz} style={this.uz}/>
                    <GeoJSON data={gidro} onEachFeature={this.onEachFeature}/>
                    {/*<GeoJSON data={boston} style={this.countryStyle} onEachFeature={this.onEachFeature}/>*/}
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
                </Map>

            </div>
        );
    }
}

export default Plant;