import React, { Component } from 'react';
import '../style/LoginInput.css';
import {FaUserAlt,FaLock} from 'react-icons/fa';
class LoginInput extends Component {
    render() {
        return (
            <div className="login-input">
                <span className="icon">
                {this.props.icon === "user" && <FaUserAlt/>}
                {this.props.icon === "password" && <FaLock/>} 
                </span>
                <input className="login-text"type="text" placeholder={this.props.name}>
                </input >
            </div>
        );
    }
}

export default LoginInput;
