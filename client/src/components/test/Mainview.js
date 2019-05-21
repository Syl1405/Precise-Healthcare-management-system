import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import jwt_decode from 'jwt-decode'
import { test } from '../UserFunctions'

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
            StagesDeep: '',
            StagesLight: '',
            StagesRem: '',
            StagesWake: '',
            StagesDeep2: '',
            StagesLight2: '',
            StagesRem2: '',
            StagesWake2: '',
            LightlyActiveMinutes: '',
            FairlyActiveMinutes: '',
            VeryActiveMinutes: '',
            CaloriesOut: ''
        }
        test().then(res => {
            //this.props.history.push(`/`)
            console.log(res);
            this.setState({
                /*StagesDeep: res[0].StagesDeep,
                StagesLight: res[0].StagesLight,
                StagesRem: res[0].StagesRem,
                StagesWake: res[0].StagesWake,
                StagesDeep2: res[1].StagesDeep,
                StagesLight2: res[1].StagesLight,
                StagesRem2: res[1].StagesRem,
                StagesWake2: res[1].StagesWake*/
                LightlyActiveMinutes: res[0].LightlyActiveMinutes,
                FairlyActiveMinutes: res[0].FairlyActiveMinutes,
                VeryActiveMinutes: res[0].VeryActiveMinutes,
                CaloriesOut: res[0].CaloriesOut
            })
        })
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
        /*var configs = {
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
        }*/
        var configs = {
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
                    <HighchartsReact highcharts = {Highcharts} options={configs} />

                </div>
            </div>
        )
    }
}

export default Mainview