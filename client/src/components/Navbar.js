import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './css/styles.css';

if(window.location.href.match('patient')!=null)
    console.log("12345789");
class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        let path = window.location.href;
        let title = (path.match('patient')!=null) ? "個人數據" : ((path.match('rank')!=null) ? "健康排行榜" : "成員總覽");
        const loginRegLink = (
            <div className="title_login">
                <div className="login">
                    <Link to="/login" className="link_login" >登入</Link>
                </div>
                <div className="register">
                    <Link to="/register" className="link_login">登出</Link>
                </div>
            </div>
        )
        const userLink = (
                <div className="title">
                    <div className="text-center">{title}</div>
                <div className="text-right">
                    <a href="" onClick={this.logOut.bind(this)} className="link_login">登出 </a>
                    <a> &nbsp;</a>
                </div>
                </div>
        )

        return (
            <div>
                    {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        )
    }
}

export default Navbar
