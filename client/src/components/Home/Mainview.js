import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import { home } from '../UserFunctions'
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
////style={{backgroundColor: "#444444"}}
class Mainview extends Component {
    constructor() {
        super()
        this.state = {
            
        }
        home().then(res => {
            //this.props.history.push(`/`)
            console.log(res);
            this.setState({
                
            })
        })
        home().then(res => {
            //this.props.history.push(`/`)
            console.log(res);
            this.setState({
                
            })
        })
    }
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mainview