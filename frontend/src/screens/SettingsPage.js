import React, { Component } from 'react';
import '../style/NonProfitReq.css';
import {Route} from 'react-router-dom'
import axios from 'axios'

class SettingsPage extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            url : this.props.location.state.passedurl,
            email: this.props.location.state.detail.email
        }
        console.log(this.state);
    }
    
    onDelete(history){
        this.state.url === "rhome"?
            axios.delete('http://127.0.0.1:8000/api/restaurants/', 
              { 
                params:{
                    email: this.state.email,
                }
              })
            .then(function (response) {
                if(response.data.message === "SUCCESS"){
                    console.log(response.data);
                    history.push({pathname: '/home'})
                }
            })
        :
            axios.delete('http://127.0.0.1:8000/api/nonprofits/', 
            {
                params:{
                    email: this.state.email,
                }
            })
            .then(function (response) {
                if(response.data.message === "SUCCESS"){
                    console.log(response.data);
                    history.push({pathname: '/home'})
                }
            })
        
    }

    render() {
        return (
            <Route render={({ history}) => (
                <div className="np-req-page">
                    <div className="navigation">
                        <div onClick={() => history.push(this.state.url)}className = "r-nav-title"><img className="np-req-logo"alt="Save Me A Piece" src={require('../logo.png')}/>HOME </div>
                        <div className = "r-nav-title">NON PROFIT REQUESTS</div>
                        <div onClick={() => history.push("/menu")} className = "r-nav-title">MY MENU</div>
                        <div className = "r-nav-title">SETTINGS</div>
                    </div>
                    <div className="np-req-body">
                        <div className = "results">
                            <div className="np-req-header">Settings</div>
                            <br/>
                            <div onClick={() => this.onDelete(history)} className="">Delete Account</div>
                            <div onClick={() => history.push({pathname: '/editpage', state: { detail:  this.state.email, passedurl:this.state.url } })} className = "">Go to Edit Page</div>
                        </div>
                    </div>
                </div>
            )}/>
        );
    }
}

export default SettingsPage;