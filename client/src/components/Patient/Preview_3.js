import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import '../../index.css';
import constantData from './_History_Rate2.json';
import { patient_1 } from '../UserFunctions'

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official


HighchartsMore(Highcharts)
HighchartsMore(Highstock)

var NewArray = new Array();
NewArray = window.location.href.split('/');
const userid =  NewArray[NewArray.length-1];

var constantData4 = (userid == "67af0b6ee92a46b5a987c2e639f01720") ? require('./fake_data1.json') : ((userid == "afa9952a02d44533bcbe6b2e3511500d") ? require('./fake_data2.json') : ((userid == "2c1c3a34e3c142c48c2cb09b176045e5") ? require('./fake_data3.json') : require('./fake_data4.json')));

class Preview_2 extends Component {
    constructor() {
        super()
        this.state = {
            width: Number(document.body.clientWidth*0.4),
            height: Number(document.body.clientWidth*0.2),
            textsize: Number(document.body.clientWidth*0.001)
        }
        
    }

    render () {
        console.log(this.state.textsize);
         var configs_1 = {
            chart: {
                type: 'line',
                width: this.state.width,
                height: this.state.height
            },                      
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 10,
                symbolHeight: 10,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "0.8rem"
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
                  selected : 1
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
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'gray'
                    }
                }
            },
            series: [
                {
                    name: 'Cardi_rate',
                    data: constantData4.Cardi_rate
                }
            ]
        }
        var configs_2 = {
            chart: {
                type: 'line',
                width: this.state.width,
                height: this.state.height
            },                      
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 10,
                symbolHeight: 10,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "0.8rem"
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
                  selected : 1
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
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'gray'
                    }
                }
            },
            series: [
                {
                    name: 'Diebetes_rate',
                    data: constantData4.Diebetes_rate
                }
            ]
        }
        return (
                <div className="graphs_3">
                        <div style={{margin:"0 auto"}}>
                            <div className="graph_name">心血管疾病</div>
                            <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_1} />
                        </div>
                        <div style={{margin:"0 auto"}}>
                            <div className="graph_name">心血管疾病</div>
                            <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_2} />
                        </div>
                </div>
                
        )
    }
}

export default Preview_2