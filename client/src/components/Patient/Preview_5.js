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
import PropTypes from 'prop-types';
import { FixedSizeList as List } from "react-window";

HighchartsMore(Highcharts)
HighchartsMore(Highstock)
var rows;
var userid;
/*const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const Example = () => (
  <List
  className="List"
  height={100}
  itemCount={10}
  itemSize={20}
  width={100}
>
  {Row}

</List>
);*/
class Preview_5 extends Component {

    constructor() {
        super()
        this.state = {
            width: Number(document.body.clientWidth*0.4),
            height: Number(document.body.clientWidth*0.2),
            textsize: Number(document.body.clientWidth*0.001),
            type_all: [],
            type: '',
            image: [],
            selectimg: 'image/users/empty'
        }
        var NewArray = new Array();
        NewArray = window.location.href.split('/');
        userid =  NewArray[NewArray.length-1];
        imgtype(userid).then(res => {
            rows = res;
            console.log(res);
            if(res){
                for(let i = 0;i < res.length;i++){
                    this.state.type_all.push(res[i]);
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
                            this.state.image.push(res[i]);
                            this.setState(this.state)
                        }
                        console.log(this.state);
                         this.forceUpdate();
                    }
                })
            }
        })

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)

    }
    onChange (e) {

        console.log(e.target.name+" "+e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        this.state.type = this.state.type_all[2];
        console.log(e.target.value);

        const user = {
            userid: userid,
            type: e.target.value
        }
        console.log(user);
        console.log(this.value);
        imgdata(user).then(res => {
            rows = res;
            console.log(res);
            this.setState({image: []});
            if(res){
                for(let i = 0;i < res.length;i++){
                    this.state.image.push(res[i]);
                    this.setState(this.state)
                }
                console.log(this.state);
                this.forceUpdate();
            }
        })
        console.log(e.target.value);
        this.onClick = this.onClick.bind(this);

    }
    onClick (e) {
        this.setState({ selectimg: e.target.name });
        this.forceUpdate();
        console.log(e.target.name);
        console.log(this.state);
        console.log(this.state.type);
    }
    render () {
        //console.log(example);
        const Row = ({ index, style }) => (
          <button className={index % 2 ? "ListItemOdd" : "ListItemEven"} name="type" style={style} value={this.state.type_all[index]} onClick={this.onChange} >
            {this.state.type_all[index]}
          </button>
        )
        const Example = () => (
            <List
            className="List"
            height={100}
            itemCount={this.state.type_all.length}
            itemSize={50}
            width={100}
          >
          {Row}

        </List>
        )

        return (
            <div className="graphs_5">
            <div className="radio" style={{width:'10vw'}}>

                 <div className="top">
                 <br/>
                 </div>
                   <Example/>

            </div>
               <div class="image">
                        {
                           this.state.image.map((image) => {
                              return (
                                <div>
                                    <img src={require("../"+image.imagepath+".jpg")} data-toggle="modal"  href="#wavWindow" onClick={this.onClick} name={image.imagepath}/>
                                    <a style={{fontSize:'20px'}}>{image.name}</a>
                                </div>
                              );
                            })
                        }

               </div>
               <div className="modal fade" id="wavWindow" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" onSubmit={this.onSubmit}>
                        <div className="modal-dialog">
                            <div className="modal-content"  style={{height:'80vh',width: '50vw',marginLeft: '-10vw',marginTop: '5vw'}}>
                                <div className="modal-body">
                                <br/>
                                <img src={require("../"+this.state.selectimg+".jpg")}  style={{width: '80vh',height: '50vh'}}/>

                                </div>
                                <div >
                                    <button data-dismiss="modal" aria-hidden="true" className="loginbtn" id="canc" style={{marginLeft:'0vw'}}>返回</button>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>

        )
    }
}

export default Preview_5
