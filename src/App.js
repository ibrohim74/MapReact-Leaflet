import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';// import Layouts from "./components/layoutS";
import "antd/dist/antd.css"
import RouterS from "./components/routerS";


class  App extends React.Component{
    authenticate(){
        return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
    }

    componentDidMount(){
        this.authenticate().then(() => {
            const ele = document.getElementById('ipl-progress-indicator')
            if(ele){
                // fade out
                ele.classList.add('available')
                setTimeout(() => {
                    // remove from DOM
                    ele.outerHTML = ''
                }, 2000)
            }
        })
    }
    render() {
        return (
            <div>
                <RouterS/>
            </div>

        );
    }
}

export default App;