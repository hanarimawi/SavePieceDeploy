import React, { Component } from 'react';
import Login from '../components/Login'
import '../style/Login.css';

class LoginPage extends Component {
    componentWillReceiveProps(nextProps) {
        this.setState({
            children: nextProps.children
        });
    }
    render() {
        return (
            <div className="login-page">
            <Login type={this.props.location.state.detail}/>
            </div>
        );
    }
}

export default LoginPage;
