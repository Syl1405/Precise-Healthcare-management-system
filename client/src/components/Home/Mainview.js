import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import { home , sort , search } from '../UserFunctions'
import Preview from './Preview';
import Sidebar from './Sidebar';
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
            sort: 'sleep',
            searchtype: 'name',
            search: ''
        };
        home().then(res => {
            rows = res;
            console.log(res);
            if(res)
                for(let i = 0;i < res.length;i++){
                    this.state.user.push(res[i]);
                    this.setState(this.state)
                }
            console.log(this.state);
        })
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    writeConsole() {
          console.log(this.state.sort)
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit (e) {
        if(e.target.name == "sort"){
            console.log(this.state.sort);
            sort(this.state.sort).then(res => {
                rows = res;
                console.log(res);
                this.setState({user: [] })
                for(let i = 0;i < res.length;i++){
                    this.state.user.push(res[i]);
                }
                console.log(this.state);
                this.forceUpdate();

            })
        }
        else{

            const user = {
                type: this.state.searchtype,
                request: this.state.search
            }
             console.log(user);
            search(user).then(res => {
                rows = res;
                console.log(res);
                this.setState({user: [] })
                if(res)
                    for(let i = 0;i < res.length;i++){
                        this.state.user.push(res[i]);
                    }
                console.log(this.state);
                this.forceUpdate();

            })
        }
    }
    render () {
        return (
          <div className="menu">
                <div className="btn">
                  <input type="button" data-toggle="modal" id="sort" value="排序" href="#sortModal"/>
                  <input type="button" data-toggle="modal" id="search" value="搜尋" href="#searchModal"/>
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
                <div className="modal fade" id="sortModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" onSubmit={this.onSubmit}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                            <br/>
                                <input type="radio" name="sort" value="sleep" onClick={this.onChange} className="leftside" checked={this.state.sort === "sleep"}/><label id="sleep" style={{fontSize: "1.5vw"}}>睡眠</label>
                                <input type="radio" name="sort" value="temperature" onClick={this.onChange} className="rightside" checked={this.state.sort === "temperature"}/><label style={{fontSize: "1.5vw"}}>體溫</label><br/>
                                <input type="radio" name="sort" value="activate" onClick={this.onChange} className="leftside" checked={this.state.sort === "activate"}/><label style={{fontSize: "1.5vw"}}>活動量</label>
                                <input type="radio" name="sort" value="blood_pressure" onClick={this.onChange} className="rightside" checked={this.state.sort === "blood_pressure"}/><label style={{fontSize: "1.5vw"}}>血壓</label><br/>
                                <input type="radio" name="sort" value="blood_suger" className="leftsidee" onClick={this.onChange} checked={this.state.sort === "blood_suger"}/><label style={{fontSize: "1.5vw"}}>血糖</label>
                            </div>
                            <div >
                                <button data-dismiss="modal" aria-hidden="true" onClick={this.onSubmit} className="loginbtn" name="sort" id="conf">確定</button>
                                <button data-dismiss="modal" aria-hidden="true" className="loginbtn" id="canc">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" onSubmit={this.onSubmit}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                            <br/>
                                <input type="search" name="search" value={this.state.search} onChange={this.onChange} style={{width: '200px',marginRight:'5vw'}} />
                                <input type="radio" name="searchtype" value="name" onClick={this.onChange} checked={this.state.searchtype === "name"}/><label style={{fontSize: "1.5vw"}}>姓名</label>
                                <input type="radio" name="searchtype" value="userid" onClick={this.onChange} checked={this.state.searchtype === "userid"}/><label style={{fontSize: "1.5vw"}}>編號</label>
                            </div>
                            <div>
                                <button data-dismiss="modal" aria-hidden="true" onClick={this.onSubmit} className="loginbtn" name="search" id="conf">確定</button>
                                <button data-dismiss="modal" aria-hidden="true" className="loginbtn">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Mainview
