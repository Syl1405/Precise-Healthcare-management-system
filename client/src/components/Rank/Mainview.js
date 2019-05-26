import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import jwt_decode from 'jwt-decode'
import { rank } from '../UserFunctions'
import '../../index.css';
import '../css/rank.css';

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official
HighchartsMore(Highcharts)
HighchartsMore(Highstock)
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
////style={{backgroundColor: "#444444"}}
class Mainview extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        };
        //console.log(this.props.match.params.id);
        rank().then(res => {
            console.log(res);
            for(let i = 0;i < res.length;i++){
                //console.log(res[i].userid);
                this.state.user.push(res[i]);
                /*this.state.name.push(res[i].name);
                this.state.blood_suger.push(res[i].blood_suger);
                this.state.blood_pressure.push(res[i].blood_pressure);
                this.state.temperature.push(res[i].temperature);
                this.state.activate.push(res[i].activate);
                this.state.sleep.push(res[i].sleep);
                this.state.imagepath.push(res[i].imagepath);*/
                this.setState(this.state)
            }
            console.log(this.state.user);

        })
    }
    componentDidMount() {
        
    }

    /*componentDidMount () {
        const token = localStorage.datatoken
        //const decoded = jwt_decode(token)
        this.setState({
            StagesDeep: token[0].StagesDeep,
            StagesLight: token[1].StagesLight,
            StagesRem: token[2].StagesRem,
            StagesWake: token[3].StagesWake
        })
    }*/

    render () {
        return (
            <div>
              ra
            </div>
        )
    }
}

export default Mainview