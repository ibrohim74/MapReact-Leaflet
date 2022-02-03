import React from 'react';
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom";
import LeafletMap from "../Pages/leafletMap";
import ReactMap from "../Pages/reactMap";
import LeafletTest from "../Pages/leafletTest";

function RouterS(props) {
    return (
        <div>
            <Switch>
                <Route path="/leafletMap">
                    <LeafletMap/>
                </Route>
                <Route path="/reactMap">
                    <ReactMap/>
                </Route>
                <Route path="/leafletTest">
                    <LeafletTest/>
                </Route>
                <Route path="/">
                    <div style={{justifyContent:'center', alignItems:'center', height:'100vh', display:"flex", fontSize:'100px', fontWeight:'bold'}}> Yaylov 1.1</div>
                </Route>
            </Switch>
        </div>
    );
}

export default RouterS;