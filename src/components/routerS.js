import React from 'react';
import { BrowserRouter as Router, Route, Switch , HashRouter, useHistory} from 'react-router-dom';
import LeafletMap from "../Pages/leafletMap";
import SignUp from "../Pages/login/signUp";
import SignIn from "../Pages/login/signIn";
import IndexPages from "../Pages/indexPages";
import LayoutNav from "./layoutNav"

function RouterS(props) {
    return (

        <HashRouter basename={"/"}>
        <div>
            <Switch>
                <Route path="/leafletMap" component={LeafletMap}/>

                <Route path="/layouts" component={LayoutNav}/>


                <Route path="/signIn" component={SignIn}/>

                <Route path="/signUp" component={SignUp}/>

                <Route  path="/" exact component={IndexPages}/>

            </Switch>
          </div></HashRouter>
    );
}

export default RouterS;