import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import '../../index.css';
import example from '../image/wav_example.png';
import { patient_1 } from '../UserFunctions'

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official
//import {cloud} from './cloud/voice.js'

import WordCloud from "react-d3-cloud";
import data from "./cloud/json/0328699361220-1549368388953-ce0196cd40b74a508edefb85769eb53a.json";

HighchartsMore(Highcharts)
HighchartsMore(Highstock)

const keys=Object.keys(data);
let buffer = [];

class Preview_4 extends Component {
    constructor() {
        super()
        this.state = {
            width: Number(document.body.clientWidth*0.4),
            height: Number(document.body.clientWidth*0.2),
            textsize: Number(document.body.clientWidth*0.001)
        }
        for(var i=0;i<keys.length;++i){
          if(data[keys[i]]["draw"]){
            buffer.push({text:keys[i],value:data[keys[i]]["times"]+10.5}); //加權
          }
          else{
            buffer.push({text:keys[i],value:data[keys[i]]["times"]});
          }
        }

    }
    DrawCloud() {
      const newData = buffer.map(item => ({
        text: item.text,
        value: item.value
      }));
      return (
        <WordCloud
          width={1000}
          height={750}
          data={newData}
          fontSizeMapper={word => word.value*4+10} //scale function
          padding={2}
        />
      );
    }
    render () {
        console.log(example);
        const newData = buffer.map(item => ({
            text: item.text,
            value: item.value
        }));
        return (
                <div className="graphs_4">
                <a data-toggle="modal" href="#wavWindow">
                    <WordCloud
                      width={1000}
                      height={750}
                      data={newData}
                      fontSizeMapper={word => word.value*4+10} //scale function
                      padding={2}
                    /></a>

                    <div className="modal fade" id="wavWindow" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" onSubmit={this.onSubmit}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                <br/>

                                </div>
                                <div >
                                    <button data-dismiss="modal" aria-hidden="true" onClick={this.onSubmit} className="loginbtn" name="sort" id="conf">確定</button>
                                    <button data-dismiss="modal" aria-hidden="true" className="loginbtn" id="canc">取消</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Preview_4
