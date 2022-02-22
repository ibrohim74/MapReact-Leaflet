import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeafletMap from "../Pages/leafletMap";
import ReactMap from "../Pages/reactMap";
import LeafletTest from "../Pages/leafletTest";
import SignUp from "../Pages/login/signUp";
import SignIn from "../Pages/login/signIn";
import IndexPages from "../Pages/indexPages";
import LayoutNav from "./layoutNav"

function RouterS(props) {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/leafletMap">
                    <LeafletMap/>
                </Route>
                <Route path="/layouts">
                    <LayoutNav/>
                </Route>

                <Route path="/signIn">
                    <SignIn/>
                </Route>
                <Route path="/signUp">
                    <SignUp/>
                </Route>
                <Route path="/">
                     <IndexPages/>
                </Route>
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default RouterS;