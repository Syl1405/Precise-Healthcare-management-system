import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import { home } from '../UserFunctions'
import Preview from './Preview';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

class Mainview_2 extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        };
        

    }
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div>
                        aaa
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Mainview_2