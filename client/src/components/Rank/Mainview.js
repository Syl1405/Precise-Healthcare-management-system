import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import { home } from '../UserFunctions'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
////style={{backgroundColor: "#444444"}}
var rows;
class Mainview extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        };

    }
    render () {
        return (
                <div>
                    rank                 
                </div>
        )
    }
}

export default Mainview