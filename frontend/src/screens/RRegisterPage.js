import React, { Component } from 'react';
import RRegister from '../components/RRegister'
import '../style/SignUpPage.css';

class RRegisterPage extends Component {
    render() {
        return (
            <div className="signup-page">
            <RRegister/>
            </div>
        );
    }
}

export default RRegisterPage;
