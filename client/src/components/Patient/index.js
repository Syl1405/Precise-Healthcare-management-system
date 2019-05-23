import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import Login from './Login';
import Sidebar from './Sidebar';
import Mainview from './Mainview';
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
////style={{backgroundColor: "#444444"}}
class Article extends React.Component {

  constructor (props) {
    super(props)
    
    const {id} = this.props.match.params
    this.state = {
      product: {
        id
      }
    }
  }
  
  render () {
    return (
      <div >
        <h1>aaa</h1>
      </div>
    )
  }
}


export default Article