import React, { Component } from 'react';
// import LoginInput from './LoginInput'
import '../style/Login.css';
import { Route } from 'react-router-dom'
import axios from 'axios'
import '../style/LoginInput.css';
import {FaUserAlt,FaLock} from 'react-icons/fa';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : this.props.type,
            email: "",
            password: ""
        }
    }

    onLogin(history){
        this.state.url === "rhome"?
            axios.get('http://127.0.0.1:8000/api/restaurants/', 
              { 
                params:{
                    email: this.state.email,
                    password: this.state.password
                }
              })
            .then(function (response) {
                if(response.data.message === "SUCCESS"){
                    let res = response.data.result[0];
                    let restobj = { 
                        email: res[0],
                        password: res[2],
                        name: res[1],
                        address: res[3],
                        city: res[4],
                        state: res[5],
                        zip_code: res[6],
                        phone: res[7]
                  };
                    history.push({pathname: '/rhome', state: { detail: restobj}})
                }
            })
        :
            axios.get('http://127.0.0.1:8000/api/nonprofits/', 
            {
                params:{
                    email: this.state.email,
                    password: this.state.password
                }
            })
            .then(function (response) {
                if(response.data.message === "SUCCESS"){
                    let np = response.data.result[0];
                    let npobj = { 
                        email: np[0],
                        password: np[2],
                        name: np[1],
                        address: np[3],
                        city: np[4],
                        state: np[5],
                        zip_code: np[6],
                        phone: np[7]
                  };
                    history.push({pathname: '/nphome', state: { detail: npobj}})
                }
            })
        
    }
    
    handleEmailChange = (e) =>{
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <Route render={({ history}) => (
            <div className="login-comp">
                <img alt="Save Me A Piece" src={require('../logo.png')}/>
                <div className="login-title">WELCOME BACK!</div>
                <div className="login-title">PLEASE LOGIN:</div>
                <br/>
                <div className="login-input">
                    <span className="icon">
                        <FaUserAlt/>
                    </span>
                    <input onChange={this.handleEmailChange} className="login-text"type="text" placeholder="EMAIL">
                    </input >
                </div>
                <div className="login-input">
                    <span className="icon">
                        <FaLock/>
                    </span>
                    <input onChange={this.handlePasswordChange} className="login-text"type="password" placeholder="PASSWORD">
                    </input >
                </div>
                <button className="login-button" onClick={() => this.onLogin(history)} > 
                    <span className="button-login-name">LOGIN</span>
                </button>
            </div>
            )}
            />
        );
    }
}

export default Login;
