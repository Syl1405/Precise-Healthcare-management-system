import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import '../../index.css';
import example from '../image/image_example.jpg';
import { patient_1 , imgtype , imgdata } from '../UserFunctions'

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official


HighchartsMore(Highcharts)
HighchartsMore(Highstock)
var rows;
var userid;
class Preview_5 extends Component {
    constructor() {
        super()
        this.state = {
            width: Number(document.body.clientWidth*0.4),
            height: Number(document.body.clientWidth*0.2),
            textsize: Number(document.body.clientWidth*0.001),
            type_all: [],
            type: '',
            image: []
        }
        var NewArray = new Array();
        NewArray = window.location.href.split('/');
        userid =  NewArray[NewArray.length-1];
        imgtype(userid).then(res => {
            rows = res;
            console.log(res);
            if(res){
                for(let i = 0;i < res.length;i++){
                    //console.log(res[i].userid);
                    this.state.type_all.push(res[i]);
                    /*this.state.name.push(res[i].name);
                    this.state.blood_suger.push(res[i].blood_suger);
                    this.state.blood_pressure.push(res[i].blood_pressure);
                    this.state.temperature.push(res[i].temperature);
                    this.state.activate.push(res[i].activate);
                    this.state.sleep.push(res[i].sleep);
                    this.state.imagepath.push(res[i].imagepath);*/
                    this.setState(this.state)
                }
                this.setState({type: this.state.type_all[0]})
                console.log(this.state);
                const user = {
                    userid: userid,
                    type: res[0]
                }
                console.log(user);
                 this.forceUpdate();
                imgdata(user).then(res => {
                    rows = res;
                    console.log(res);
                    this.setState({image: []})
                    if(res){
                        for(let i = 0;i < res.length;i++){
                            //console.log(res[i].userid);
                            this.state.image.push(res[i]);
                            /*this.state.name.push(res[i].name);
                            this.state.blood_suger.push(res[i].blood_suger);
                            this.state.blood_pressure.push(res[i].blood_pressure);
                            this.state.temperature.push(res[i].temperature);
                            this.state.activate.push(res[i].activate);
                            this.state.sleep.push(res[i].sleep);
                            this.state.imagepath.push(res[i].imagepath);*/
                            this.setState(this.state)
                        }
                        console.log(this.state);
                         this.forceUpdate();
                    }
                })
            }
        })

        this.onChange = this.onChange.bind(this)

    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
        //console.log(this.state)
        const user = {
            userid: userid,
            type: e.target.value
        }
        console.log(user);
        imgdata(user).then(res => {
            rows = res;
            console.log(res);
            this.setState({image: []});
            if(res){
                for(let i = 0;i < res.length;i++){
                    //console.log(res[i].userid);
                    this.state.image.push(res[i]);
                    this.setState(this.state)
                }
                console.log(this.state);
                this.forceUpdate();
            }
        })

    }
    render () {
        //console.log(example);
        return (
            <div className="graphs_5">
               <div className="radio" style={{width:'10vw'}}>
                    <div className="top">
                    <br/>
                    </div>
                    {
                       this.state.type_all.map((type) => {
                          return (
                            <div>
                                <input type="radio" name="type" value={type} onClick={this.onChange} className="leftphoto" checked={this.state.type === type}/><label style={{fontSize: "1.5vw"}}>{type}</label>
                            </div>
                          );
                        })
                    }
               </div>
               <div class="image">
                    

                        {
                           this.state.image.map((image) => {
                              return (
                                <div>
                                    <img src={require("../"+image.imagepath+".jpg")} />
                                    <a style={{fontSize:'20px'}}>{image.name}</a>
                                </div>
                              );
                            })
                        }

               </div>
            </div>

        )
    }
}

export default Preview_5
