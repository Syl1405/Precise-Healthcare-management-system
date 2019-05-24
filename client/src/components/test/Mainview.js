import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import jwt_decode from 'jwt-decode'
import { patient } from '../UserFunctions'
import '../../index.css';

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
        //console.log(this.props.match.params.id);
        this.state = {
            name: '',
            imagepath:'',
            StagesDeep: '',
            StagesLight: '',
            StagesRem: '',
            StagesWake: '',
            LightlyActiveMinutes: '',
            FairlyActiveMinutes: '',
            VeryActiveMinutes: '',
            CaloriesOut: ''
        }
        var NewArray = new Array();
　      NewArray = window.location.href.split('/');
        console.log(NewArray[NewArray.length-1]);
        const userid =  NewArray[NewArray.length-1];
        var size = 0;
        patient(userid).then(res => {
            console.log(res);
            console.log(res[3] != undefined ? 1 : 0);
            this.setState({
                name: res[0].name,
                imagepath: res[0].imagepath,
                LightlyActiveMinutes: res[2] != undefined ? res[2].sum_1 : 0,
                FairlyActiveMinutes: res[2] != undefined ? res[2].sum_2 : 0,
                VeryActiveMinutes: res[2] != undefined ? res[2].sum_3 : 0,
                CaloriesOut: res[2] != undefined ? res[2].sum_4 : 0,
                StagesDeep:  res[3] != undefined ? res[3].StagesDeep : 0,
                StagesLight: res[3] != undefined ? res[3].StagesLight : 0,
                StagesRem:  res[3] != undefined ? res[3].StagesRem : 0,
                StagesWake: res[3] != undefined ? res[3].StagesWake : 0
                
            })

            
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
        var configs = {
            chart: {
                type: 'bar',
                height: 300,
                width: 600
            },

            title: {
                text: ''
            },

            xAxis: {
                categories: ['Sleep State']
            },

            yAxis: {
                min: 0,
                title: {
                    text: 'Total sleep time (min)'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            
            plotOptions: {
                bar: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            
            series: [
                {
                    name: 'Deep',
                    data: [this.state.StagesDeep]
                },
                {
                    name: 'Light',
                    data: [this.state.StagesLight]
                },
                {
                    name: 'Rem',
                    data: [this.state.StagesRem]
                },
                {
                    name: 'Wake',
                    data: [this.state.StagesWake]
                },
            ]
        }
        var configs_2 = {
            chart: {
                type: 'bar',
                marginTop: 40,
                marginBottom: 80,
                plotBorderWidth: 1,
                height: 300,
                width: 650
            },

            legend: {
                y: 15
            },

            title: {
                text: '',
            },

            xAxis: {
                categories: ['Calories','Active']
            },
        
            yAxis: [
                {
                    title: {
                        text: 'Time (min)'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                {
                    title: {
                        text: 'calories (kcal)'
                    },
                    opposite: true
                }
            ],

            plotOptions: {
                bar: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },

            series: [
                {
                    type: 'bar',
                    name: 'Lightly Active',
                    data: [0,this.state.LightlyActiveMinutes]
                },
                {
                    type: 'bar',
                    name: 'Fairly Active',
                    data: [0,this.state.FairlyActiveMinutes]
                },
                {
                    type: 'bar',
                    name: 'Very Active',
                    data: [0,this.state.VeryActiveMinutes]
                },
                {
                    type: 'bar',
                    name: 'Calorie',
                    data: [this.state.CaloriesOut,0],
                    dataLabels: {
                        enabled: true,
                    },
                    yAxis: 1
                }
            ]
        }
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <img src={this.state.imagepath} alt={this.state.name} className="circular--square" height="100" width="100" /><br/>
                    <a>{this.state.name}</a><br/>
                </div>
                <div className="jumbotron mt-5">
                    <HighchartsReact highcharts = {Highcharts} options={configs} />
                    
                </div>
                <div className="jumbotron mt-5">
                    <HighchartsReact highcharts = {Highcharts} options={configs_2} />
                </div>
            </div>
        )
    }
}

export default Mainview