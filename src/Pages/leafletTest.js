import React,{useState} from 'react';
import {Map, TileLayer,FeatureGroup, withLeaflet} from "react-leaflet/es/index"
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./../index.css"
import {EditControl} from "react-leaflet-draw";
import PrintControlDefault from "react-leaflet-easyprint";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const PrintController = withLeaflet(PrintControlDefault);



const LeafletTest = () =>{
    const [center, setCenter] = useState({ lat:  41.311081 ,lng:69.240562 });
    const [mapLayer, setMapLayers] = useState([]);

    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    const printControllerRef = useRef();

    const _onCreate = (e) =>{
        console.log(e)

        const {layerType, layer} = e;
if (layerType === "polygon"){
    const {_leaflet_id } =layer;

    setMapLayers((layers)=>[
        ...layers,
        {id:_leaflet_id, latlngs:layer.getLatLngs()[0]}
    ])
}
    }

    const _onEdited = (e) =>{
console.log(e)
const{
    layers: { _layers },
} = e;

        Object.values(_layers).map(({ _leaflet_id, editing }) => {
            setMapLayers((layers) =>
                layers.map((l) =>
                    l.id === _leaflet_id
                        ? { ...l, latlngs: { ...editing.latlngs[0] } }
                        : l
                )
            );
        });
    }

    const _onDeleted = (e) => {
        console.log(e);
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id }) => {
            setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
        });
    };

    return(
        <>
            <Map
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
            >

                <FeatureGroup>
                    <EditControl
                        position="topright"
                        onCreated={_onCreate}
                        onEdited={_onEdited}
                        onDeleted={_onDeleted}
                        draw={{
                            rectangle: false,
                            polyline: false,
                            circle: false,
                            circlemarker: false,
                            marker: false,
                        }}
                    />
                </FeatureGroup>





                <TileLayer url={"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=BQ7Tkd3bApia7yVhAuC7"}
                           attribution={'&copy; <a href="">MapTiler</a> &copy; <a href="">OpenStreetMap</a> contributors'}/>



                           <PrintController
                               ref={printControllerRef}
                               position="topleft"
                               sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                               hideControlContainer={false}
                           />
                           <PrintController
                               position="topleft"
                               sizeModes={["Current", "A4Portrait", "A4Landscape"]}
                               hideControlContainer={false}
                               title="Export as PNG"
                               exportOnly
                           />
            </Map>
            <pre className="text-left">{JSON.stringify(mapLayer, 0, 2)}</pre>
        </>
    )
}

export default LeafletTest;