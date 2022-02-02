import React from 'react';
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom";
// import Layouts from "./components/layoutS";
import "antd/dist/antd.css"
import Layouts from "./components/layoutS";

function App(props) {
    return (
        <div>
            <Router>
       <Layouts/>
            </Router>
        </div>
    );
}

export default App;