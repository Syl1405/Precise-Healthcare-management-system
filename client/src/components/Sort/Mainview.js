import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import { home , sort } from '../UserFunctions'
import Preview from './Preview';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
////style={{backgroundColor: "#444444"}}
var rows;
class Mainview extends Component {
    constructor() {
        super()
        this.state = {
            user: [],
            sort: 'sleep'
        };
        if(rows == null){
            home().then(res => {
                rows = res;
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
                console.log("aaaaaaaa");

            })
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    writeConsole() {
          console.log('點了點了點了')
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit (e) {

        //alert(this.state.sort);
        sort(this.state.sort).then(res => {
            rows = res;
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
            console.log(this.state);
        })
    }
    render () {
        return (
          <div className="menu">
                <div className="btn">
                  <input type="button" data-toggle="modal" id="sort" value="排序" href="#sortModal"/>
                  <input type="button" onClick={this.writeConsole} id="search" value="搜尋" />
                </div>
                <div className="modal fade" id="sortModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" onSubmit={this.onSubmit}>
                    <form noValidate onSubmit={this.onSubmit}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p style={{ textAlign: 'center' }}>排序</p>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <input type="radio" name="sort" value="sleep" onClick={this.onChange} checked={this.state.sort === "sleep"}/><label style={{fontSize: "1.5vw"}}>睡眠</label>
                                <input type="radio" name="sort" value="temperature" onClick={this.onChange} checked={this.state.sort === "temperature"}/><label style={{fontSize: "1.5vw"}}>體溫</label>
                                <input type="radio" name="sort" value="activate" onClick={this.onChange} checked={this.state.sort === "activate"}/><label style={{fontSize: "1.5vw"}}>活動量</label>
                                <input type="radio" name="sort" value="blood_pressure" onClick={this.onChange} checked={this.state.sort === "blood_pressure"}/><label style={{fontSize: "1.5vw"}}>血壓</label>
                                <input type="radio" name="sort" value="blood_suger" onClick={this.onChange} checked={this.state.sort === "blood_suger"}/><label style={{fontSize: "1.5vw"}}>血糖</label>
                            </div>
                            <div>
                                <button type="submit" className="btn">確定</button>
                                <button data-dismiss="modal" aria-hidden="true" className="btn">取消</button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="guys">
                        {
                            this.state.user.map((user) => {
                              return (
                                <div  className="oneGuy">
                                    <Preview user={user} key={user.userid} />
                                </div>
                              );
                            })
                        }
                </div>
            </div>

        )
    }
}

export default Mainview
