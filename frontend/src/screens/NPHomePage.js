import React, { Component } from 'react';
import HomeButton from '../components/HomeButton'
import '../style/NPHomePage.css';
import {Route} from 'react-router-dom'
class NPHomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            nonProfit: this.props.location.state.detail,
            name: this.props.location.state.detail.name
        }
    }
    render() {
        return (
            <Route render={({ history}) => (
                <div className="np-home-page">
                    <div className="navigation">
                        <div className = "nav-title">WELCOME {this.state.name.toUpperCase()}!</div>
                        <div onClick={() => history.push({pathname: '/rest-search', state: { detail: this.state.nonProfit}})} className = "nav-title">RESTAURANTS NEAR ME</div>
                        <div onClick={() => history.push({pathname: '/settings', state: { detail:  this.state.nonProfit, passedurl:"/nphome" } })} className = "nav-title">SETTINGS</div>
                    </div>
                    <div>
                        <img alt="Save Me A Piece" src={require('../logo.png')}/>
                        <div className="np-home-title">SAVE ME A PIECE</div>
                        <HomeButton type="np" url="/rest-search" name="FIND RESTAURANTS NEAR ME"/>
                    </div>
                </div>
            )}/>
        );
    }
}

export default NPHomePage;
