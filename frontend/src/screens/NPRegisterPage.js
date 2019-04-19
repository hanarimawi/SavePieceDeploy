import React, { Component } from 'react';
import NPRegister from '../components/NPRegister'
import '../style/SignUpPage.css';

class NPRegisterPage extends Component {
    render() {
        return (
            <div className="signup-page">
            <NPRegister/>
            </div>
        );
    }
}

export default NPRegisterPage;
