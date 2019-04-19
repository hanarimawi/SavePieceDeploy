import React, { Component } from 'react';
import SignUpButton from './SignUpButton'
import '../style/SignUp.css';
import { Route } from 'react-router-dom';


class LoginChoice extends Component {

    render() {
        return (
            <Route render={({history}) => (
            <div className="signup-comp">
                <img alt="Save Me A Piece" src={require('../logo.png')}/>
                <div className="signup-title">WELCOME!  </div>
                <div className="signup-title">SELECT YOUR BUSINESS</div>
                <br/>
                <SignUpButton onClick={() => history.push({pathname: '/login', state: { detail: "rhome"}})} icon="restaurant" color="#8CB369" name="RESTAURANT"/>
                <SignUpButton onClick={() => history.push({pathname: '/login', state: { detail: "nphome"}})} icon="soup" color="#D36582" name="SOUP KITCHEN"/>
            
            </div>
            )}/>
        );
    }
}

export default LoginChoice;
