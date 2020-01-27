import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { vw, vh } from 'react-native-css'
import '../../index.css';
import constantData from './History_Sleep.json';
import constantData4 from './fake_data1.json';
import { patient_1 } from '../UserFunctions'

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official

HighchartsMore(Highcharts)
HighchartsMore(Highstock)


class Preview_1 extends Component {
    constructor() {
        super()
        this.state = {
            StagesDeep: '',
            StagesLight: '',
            StagesRem: '',
            StagesWake: '',
            LightlyActiveMinutes: '',
            FairlyActiveMinutes: '',
            VeryActiveMinutes: '',
            CaloriesOut: '',
            width: '',
            height: '',
            blood_pressure: '',
            blood_suger: '',
            temperature: '',
            weight: '',
            heart: Math.floor((Math.random()*85+60))
        }
        var NewArray = new Array();
　      NewArray = window.location.href.split('/');
        console.log(NewArray[NewArray.length-1]);
        var userid =  NewArray[NewArray.length-1];
        patient_1(userid).then(res => {
            console.log(res);
            //console.log(res[3] != undefined ? 1 : 0);
            this.setState({
                LightlyActiveMinutes: res[1] != undefined ? res[1].sum_1 : 0,
                FairlyActiveMinutes: res[1] != undefined ? res[1].sum_2 : 0,
                VeryActiveMinutes: res[1] != undefined ? res[1].sum_3 : 0,
                CaloriesOut: res[1] != undefined ? res[1].sum_4 : 0,
                StagesDeep:  res[2] != undefined ? res[2].StagesDeep : 0,
                StagesLight: res[2] != undefined ? res[2].StagesLight : 0,
                StagesRem:  res[2] != undefined ? res[2].StagesRem : 0,
                StagesWake: res[2] != undefined ? res[2].StagesWake : 0,
                blood_pressure:  res[3] != undefined ? res[3].blood_pressure : 0,
                blood_suger: res[3] != undefined ? res[3].blood_suger : 0,
                temperature:  res[3] != undefined ? res[3].temperature : 0,
                weight: res[3] != undefined ? res[3].weight : 0,
                width: Number(document.body.clientWidth*0.5),
                height: Number(document.body.clientWidth*0.2)
            })

            console.log(this.state.width);
        })

    }

    render () {
        var configs = {
            chart: {
                type: 'bar',
                width: this.state.width,
                height: this.state.height
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
                    },
                    pointWidth: 40
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
                width: this.state.width,
                height: this.state.height
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
        var configs_3 = {
            chart: {
                type: 'boxplot',
                height: this.state.height,
                width: this.state.width
            },
        
            title: {
                text: ''
            },
        
            legend: {
                enabled: false
            },
        
            xAxis: {
                categories: ['Heart Rate', 'Systolic Blood Pressure', 'Diastolic Blood Pressure', 'Blood Suger',
                            'Sleep', 'Active', 'Calorie']
            },
            
            yAxis: [
                {
                    title: {
                        text: ''
                    },
                    labels:{
                        enabled: false
                    },
                    visible: true
                },
                {
                    title: {
                        text: ''
                    },
                    labels:{
                        enabled: false
                    },
                    visible: true,
                    opposite: true
                }
            ],

            plotOptions: {
                boxplot: {
                    enableMouseTracking: false
                }
            },

            series: [
                {
                    name: "Box vlues",
                    data: [
                        {
                            x: 0,
                            low: constantData4.box_Heart[0],
                            q1: constantData4.box_Heart[1],
                            median: constantData4.box_Heart[2],
                            q3: constantData4.box_Heart[3],
                            high: constantData4.box_Heart[4],
                            name: "Heart Rate",
                            color: '#1f77b4'
                        },
                        {
                            x: 1,
                            low: constantData4.box_SystolicBloodPressure[0],
                            q1: constantData4.box_SystolicBloodPressure[1],
                            median: constantData4.box_SystolicBloodPressure[2],
                            q3: constantData4.box_SystolicBloodPressure[3],
                            high: constantData4.box_SystolicBloodPressure[4],
                            name: "Systolic Blood Pressure",
                            color: '#ff7f0e'
                        },
                        {
                            x: 2,
                            low: constantData4.box_DiastolicBloodPressure[0],
                            q1: constantData4.box_DiastolicBloodPressure[1],
                            median: constantData4.box_DiastolicBloodPressure[2],
                            q3: constantData4.box_DiastolicBloodPressure[3],
                            high: constantData4.box_DiastolicBloodPressure[4],
                            name: "Diasttolic Blood Pressure",
                            color: '#2ca02c'
                        },
                        {
                            x: 3,
                            low: constantData4.box_BloodSugar[0],
                            q1: constantData4.box_BloodSugar[1],
                            median: constantData4.box_BloodSugar[2],
                            q3: constantData4.box_BloodSugar[3],
                            high: constantData4.box_BloodSugar[4],
                            name: "Blood Suger",
                            color: '#9467bd'
                        },
                        {
                            x: 4,
                            low: constantData4.box_Sleep[0],
                            q1: constantData4.box_Sleep[1],
                            median: constantData4.box_Sleep[2],
                            q3: constantData4.box_Sleep[3],
                            high: constantData4.box_Sleep[4],
                            name: "Sleep",
                            color: '#1f77b4'
                        },
                        {
                            x: 5,
                            low: constantData4.box_Active[0],
                            q1: constantData4.box_Active[1],
                            median: constantData4.box_Active[2],
                            q3: constantData4.box_Active[3],
                            high: constantData4.box_Active[4],
                            name: "Active",
                            color: '#ff7f0e'
                        },
                        {
                            x: 6,
                            low: constantData4.box_Calorie[0],
                            q1: constantData4.box_Calorie[1],
                            median: constantData4.box_Calorie[2],
                            q3: constantData4.box_Calorie[3],
                            high: constantData4.box_Calorie[4],
                            name: "Calorie",
                            color: '#2ca02c'
                        }
                    ],
                },
                
                {
                    name: "old_heart",
                    color: "#aec7e8",
                    type: 'scatter',
                    data: constantData4.scatter_Heart,
                    marker: {
                        symbol : "circle",
                        radius: 1
                    },
                    jitter: {
                        x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
                    },
                    enableMouseTracking: false
                },
                {
                    name: "old_SBP",
                    color: "#ffbb78",
                    type: 'scatter',
                    data: constantData4.scatter_SystolicBloodPressure,
                    marker: {
                        symbol : "circle",
                        radius: 1
                    },
                    jitter: {
                        x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
                    },
                    enableMouseTracking: false
                },
                {
                    name: "old_DBP",
                    color: "#98df8a",
                    type: 'scatter',
                    data: constantData4.scatter_DiastolicBloodPressure,
                    marker: {
                        symbol : "circle",
                        radius: 1
                    },
                    jitter: {
                        x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
                    },
                    enableMouseTracking: false
                },
                {
                    name: "old_BS",
                    color: "#c5b0d5",
                    type: 'scatter',
                    data: constantData4.sactter_BloodSugar,
                    marker: {
                        symbol : "circle",
                        radius: 1
                    },
                    jitter: {
                        x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
                    },
                    enableMouseTracking: false
                },
                {
                    name: "old_Sleep",
                    color: "#aec7e8",
                    type: 'scatter',
                    data: constantData4.scatter_Sleep,
                    marker: {
                        symbol : "circle",
                        radius: 1
                    },
                    jitter: {
                        x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
                    },
                    enableMouseTracking: false
                },
                {
                    name: "old_Active",
                    color: "#ffbb78",
                    type: 'scatter',
                    data: constantData4.scatter_Active,
                    marker: {
                        symbol : "circle",
                        radius: 1
                    },
                    jitter: {
                        x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
                    },
                    enableMouseTracking: false
                },
                {
                    name: "old_Calorie",
                    color: "#98df8a",
                    type: 'scatter',
                    data: constantData4.scatter_Calorie,
                    marker: {
                        symbol : "circle",
                        radius: 1
                    },
                    jitter: {
                        x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
                    },
                    enableMouseTracking: false
                },
                
                {
                    name: "new_heart",
                    color: "red",
                    type: 'scatter',
                    data: constantData4.new_Heart,
                    marker: {
                        symbol : "circle",
                        radius: 3
                    },
                    enableMouseTracking: false
                },
                {
                    name: "new_SBP",
                    color: "red",
                    type: 'scatter',
                    data: constantData4.new_SystolicBloodPressure,
                    marker: {
                        symbol : "circle",
                        radius: 3
                    },
                    enableMouseTracking: false
                },
                {
                    name: "new_DBP",
                    color: "red",
                    type: 'scatter',
                    data: constantData4.new_DiastolicBloodPressure,
                    marker: {
                        symbol : "circle",
                        radius: 3
                    },
                    enableMouseTracking: false
                },
                {
                    name: "new_BS",
                    color: "red",
                    type: 'scatter',
                    data: constantData4.new_BloodSugar,
                    marker: {
                        symbol : "circle",
                        radius: 3
                    },
                    enableMouseTracking: false
                },
                {
                    name: "new_Sleep",
                    color: "red",
                    type: 'scatter',
                    data: constantData4.new_Sleep,
                    marker: {
                        symbol : "circle",
                        radius: 3
                    },
                    enableMouseTracking: false
                },
                {
                    name: "new_Active",
                    color: "red",
                    type: 'scatter',
                    data: constantData4.new_Active,
                    marker: {
                        symbol : "circle",
                        radius: 3
                    },
                    enableMouseTracking: false
                },
                {
                    name: "new_Calorie",
                    color: "red",
                    type: 'scatter',
                    data: constantData4.new_Calorie,
                    marker: {
                        symbol : "circle",
                        radius: 3
                    },
                    enableMouseTracking: false
                }
            ]
        }
        return (

                <div className="graphs_1">
                        <div style={{margin:"0 auto"}}>
                            <div className="graph_name" >
                                <a>心率 : {this.state.heart} bpm </a>
                                <a style={{marginLeft: '6vw'}}>血壓 : {this.state.blood_pressure} mmHg</a>
                                <a style={{marginLeft: '6vw'}}>血糖 : {this.state.blood_suger} mg/dl</a>
                                <br/><br/><br/>
                                <a>體重 : {this.state.weight} kg</a>
                                <a style={{marginLeft: '8vw'}}>體溫 : {this.state.temperature} 度</a>
                            </div>
                        </div>
                        <div>
                            <div className="graph_name" style={{marginTop:"-15vw"}}>昨日睡眠</div>
                            <HighchartsReact highcharts = {Highcharts} options={configs}/>
                            <hr/>
                        </div>
                        <div className="graph_margin">
                            <div className="graph_name">昨日活動量/卡路里</div>
                            <HighchartsReact highcharts = {Highcharts} options={configs_2}/>
                            <hr/>
                        </div>
                        <div className="graph_margin">
                            <div className="graph_name">數據對比</div>
                            <HighchartsReact highcharts = {Highcharts} options={configs_3}/>
                            <hr/>
                        </div>
                    </div>

        )
    }
}

export default Preview_1
/*<div style={{margin:"0 auto"}}>
                            <div className="graph_name">
                                <a>心率 : 68 bpm </a>
                                <a style={{marginLeft: '6vw'}}>血壓 : {this.state.blood_pressure} mmHg</a>
                                <a style={{marginLeft: '6vw'}}>血糖 : {this.state.blood_suger} mg/dl</a>
                                <br/><br/><br/>
                                <a>體重 : {this.state.weight} kg</a>
                                <a style={{marginLeft: '8vw'}}>體溫 : {this.state.temperature} 度</a>
                            </div>
                        </div>*/