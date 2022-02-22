import React, {useRef} from 'react';
import GoogleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
// import {EditControl} from "react-leaflet-draw";
// import {FeatureGroup} from "react-leaflet";
// import 'leaflet-draw/dist/leaflet.draw.css'
// import {EditControl} from "react-leaflet-draw";



const ReactMap = ({ coords, places, setCoords, setBounds, setChildClicked }) => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const handleApiLoaded = (map, maps) => {
        const triangleCoords = [
            { lat: 25.774, lng: -80.19 },
            { lat: 18.466, lng: -66.118 },
            { lat: 32.321, lng: -64.757 },
            { lat: 25.774, lng: -80.19 }
        ];
        const uz = [
            {
                "lat": 41.30389934760392,
                "lng": 69.25435116002585
            },
            {
                "lat": 41.30372525738799,
                "lng": 69.26040117917435
            },
            {
                "lat": 41.30346089795203,
                "lng": 69.26530126678378
            },
            {
                "lat": 41.30041746076011,
                "lng": 69.26480353445011
            },
            {
                "lat": 41.322981937408805,
                "lng": 69.23069772316971
            },
            {
                "lat": 41.305188883845545,
                "lng": 69.20412912529824
            }
        ]

        var bermudaTriangle = new maps.Polygon({
            paths:triangleCoords, uz,
            // paths:uz,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);


        var uzbekistan = new maps.Polygon({
            // paths:triangleCoords, uz,
            paths:uz,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
        });
        uzbekistan.setMap(map);
    }

    const defaultProps = {
        center: {
            lat: 41.311081,
            lng: 69.240562
        },
        zoom: 11
    };
//https://github.com/google-map-react/google-map-react/issues/890



    return (
        <div  style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
              bootstrapURLKeys={{ key:  'AIzaSyBOC43qTr35ugywDbaC96mnFD7V4Iu6kLA' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
                <AnyReactComponent
                    lat={41.311081}
                    lng={69.240562}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>

    );
};

export default ReactMap;