import React, { Component } from 'react'
import { login } from './UserFunctions'
import './css/styles.css';
import block from "./image/block.jpg";
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/`)
            }
        })
    }

    render () {
        return (
            <div className="loginpage">
                <div className="logincontent">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div id="loginText">登入</div>
                            <div className="form-group">
                                <label htmlFor="username" style={{fontSize: "1.5vw"}}>帳號</label>
                                <input type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" style={{fontSize: "1.5vw"}}>密碼</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                                className="loginbtn">
                                確定
                            </button>
                        </form>
                </div>
            </div>
        )
    }
}

export default Login
