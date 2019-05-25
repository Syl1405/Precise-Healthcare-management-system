import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import '../../index.css';
import constantData from './History_Sleep.json';
import constantData_2 from './History_ActiveCalories.json';
import constantData_3 from './History_BloodSugarPressure.json';
import { patient_1 } from '../UserFunctions'

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official


HighchartsMore(Highcharts)
HighchartsMore(Highstock)


class Preview_2 extends Component {
    constructor() {
        super()

    }

    render () {
        var configs_1 = {
            chart: {
                type: 'column'
            },
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 16,
                symbolHeight: 16,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "14px"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 d'},
                  { type: 'day', count: 7, text: '1 w'},
                  { type: 'month', count: 1, text: '1 m'},
                  { type: 'month', count: 3, text: '3 m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 5
              },
            
            title : {
                text : ''
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Minutes'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        style: {
                            textOutline:"none"
                        },
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'column'
                }
            },

            series: [
                {
                    name: 'Deep',
                    data: constantData.Deep,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'Light',
                    data: constantData.Light,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'Rem',
                    data: constantData.Rem,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'Wake',
                    data: constantData.Wake,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        }
        var configs_2 = {
            chart: {
                type: 'column'
            },
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 16,
                symbolHeight: 16,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "14px"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 d'},
                  { type: 'day', count: 7, text: '1 w'},
                  { type: 'month', count: 1, text: '1 m'},
                  { type: 'month', count: 3, text: '3 m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 5
              },
            
            title : {
                text : ''
            },
            yAxis: {
                title: {
                    text: 'Minutes'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        style: {
                            textOutline:"none"
                        },
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
                    }
                }
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'column'
                }
            },

            series: [
                {
                    name: 'LightlyActiveMinutes',
                    data: constantData_2.Light,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'FairlyActiveMinutes',
                    data: constantData_2.Fairly,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'VeryActiveMinutes',
                    data: constantData_2.Very,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        }
        var configs_3 = {
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 16,
                symbolHeight: 16,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "14px"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 day'},
                  { type: 'day', count: 7, text: '1w'},
                  { type: 'month', count: 1, text: '1m'},
                  { type: 'month', count: 3, text: '3m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 5
              },
            
            title : {
                text : ''
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'column'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'gray'
                    }
                }
            },
            series: [
                {
                    name: 'Calories',
                    type: 'column',
                    data: constantData_2.Calorie,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        }
        var configs_4 = {
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 16,
                symbolHeight: 16,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "14px"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 day'},
                  { type: 'day', count: 7, text: '1w'},
                  { type: 'month', count: 1, text: '1m'},
                  { type: 'month', count: 3, text: '3m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 5
              },
            
            title : {
                text : ''
            },
            yAxis: {
                title: {
                    text: 'mg/dl'
                }
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'gray'
                    }
                }
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'column'
                }
            },

            series: [
                {
                    name: 'BloodSugar',
                    type: 'column',
                    data: constantData_3.BloodSugar,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        }
        var configs_5 = {
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 16,
                symbolHeight: 16,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "14px"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 day'},
                  { type: 'day', count: 7, text: '1w'},
                  { type: 'month', count: 1, text: '1m'},
                  { type: 'month', count: 3, text: '3m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 5
              },
            
            title : {
                text : ''
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'line'
                }
            },

            series: [
                {
                    name: 'SystolicBloodPressure',
                    color: 'red',
                    type: 'line',
                    data: constantData_3.SystolicBloodPressure,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: 'DiastolicBloodPressure',
                    color: 'blue',
                    type: 'line',
                    data: constantData_3.DiastolicBloodPressure,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        }
        return (
                <div className="graphs_2">
                        <div style={{margin:"0 auto"}}>
                            <a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;睡眠&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                            <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_1}  className="graph"/>
                        </div>
                        <div style={{margin:"0 auto"}}>
                            <a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;活動量&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                            <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_2} />
                        </div>
                        <div style={{margin:"0 auto"}}>
                        <a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;睡眠&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                            <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_3} />
                        </div>
                        <div style={{margin:"0 auto"}}>
                        <a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;血壓&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                            <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_4} />
                        </div>
                        <div style={{margin:"0 auto"}}>
                        <a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;血糖&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                            <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_5} />
                        </div>
                </div>
                
        )
    }
}

export default Preview_2