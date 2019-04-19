import React, { Component } from 'react';
import '../style/NonProfitReq.css';
import TimeInterval from '../components/TimeInterval'
import {Route} from 'react-router-dom'
import axios from 'axios'

class EditPage extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            url : this.props.location.state.passedurl,
            email: this.props.location.state.detail,
            mondaystart: 0,
            mondayend: 0,
            tuesdaystart: 0,
            tuesdayend: 0,
            wednesdaystart: 0,
            wednesdayend: 0,
            thursdaystart: 0,
            thursdayend: 0,
            fridaystart: 0,
            fridayend:0,
            saturdaystart: 0,
            saturdayend: 0,
            sundaystart: 0,
            sundayend:0
        }
        console.log(this.state);
    }

    handleMondayStartChange = (val) =>{
        this.setState({mondaystart: val})
    }

    handleMondayEndChange = (val) =>{
        this.setState({mondayend:val})
    }
    
    onChangeMonday(){
        console.log(this.state.mondayend);
        let body = { 
            email: this.state.email,
            newtime: this.state.mondaystart
        };
        let body2 = { 
            email: this.state.email,
            newtime: this.state.mondayend
        };
        axios.put('http://127.0.0.1:8000/api/schedules/change_mondaystart', 
        body
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
      axios.put('http://127.0.0.1:8000/api/schedules/change_mondayend', 
        body2
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
    }

    handleTuesdayStartChange = (val) =>{
        this.setState({tuesdaystart: val})
    }

    handleTuesdayEndChange = (val) =>{
        this.setState({tuesdayend:val})
    }
    
    onChangeTuesday(){
        console.log(this.state.tuesdayend);
        let body = { 
            email: this.state.email,
            newtime: this.state.tuesdaystart
        };
        let body2 = { 
            email: this.state.email,
            newtime: this.state.tuesdayend
        };
        axios.put('http://127.0.0.1:8000/api/schedules/change_tuesdaystart', 
        body
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
      axios.put('http://127.0.0.1:8000/api/schedules/change_tuesdayend', 
        body2
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
    }

    handleWednesdayStartChange = (val) =>{
        this.setState({wednesdaystart: val})
    }

    handleWednesdayEndChange = (val) =>{
        this.setState({wednesdayend:val})
    }
    
    onChangeWednesday(){
        console.log(this.state.wednesdayend);
        let body = { 
            email: this.state.email,
            newtime: this.state.wednesdaystart
        };
        let body2 = { 
            email: this.state.email,
            newtime: this.state.wednesdayend
        };
        axios.put('http://127.0.0.1:8000/api/schedules/change_wednesdaystart', 
        body
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
      axios.put('http://127.0.0.1:8000/api/schedules/change_wednesdayend', 
        body2
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
    }

    handleThursdayStartChange = (val) =>{
        this.setState({thursdaystart: val})
    }

    handleThursdayEndChange = (val) =>{
        this.setState({thursdayend:val})
    }
    
    onChangeThursday(){
        console.log(this.state.thursdayend);
        let body = { 
            email: this.state.email,
            newtime: this.state.thursdaystart
        };
        let body2 = { 
            email: this.state.email,
            newtime: this.state.thursdayend
        };
        axios.put('http://127.0.0.1:8000/api/schedules/change_thursdaystart', 
        body
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
      axios.put('http://127.0.0.1:8000/api/schedules/change_thursdayend', 
        body2
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
    }

    handleFridayStartChange = (val) =>{
        this.setState({fridaystart: val})
    }

    handleFridayEndChange = (val) =>{
        this.setState({fridayend:val})
    }
    
    onChangeFriday(){
        console.log(this.state.fridayend);
        let body = { 
            email: this.state.email,
            newtime: this.state.fridaystart
        };
        let body2 = { 
            email: this.state.email,
            newtime: this.state.fridayend
        };
        axios.put('http://127.0.0.1:8000/api/schedules/change_fridaystart', 
        body
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
      axios.put('http://127.0.0.1:8000/api/schedules/change_fridayend', 
        body2
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
    }

    handleSaturdayStartChange = (val) =>{
        this.setState({saturdaystart: val})
    }

    handleSaturdayEndChange = (val) =>{
        this.setState({saturdayend:val})
    }
    
    onChangeSaturday(){
        console.log(this.state.saturdayend);
        let body = { 
            email: this.state.email,
            newtime: this.state.saturdaystart
        };
        let body2 = { 
            email: this.state.email,
            newtime: this.state.saturdayend
        };
        axios.put('http://127.0.0.1:8000/api/schedules/change_saturdaystart', 
        body
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
      axios.put('http://127.0.0.1:8000/api/schedules/change_saturdayend', 
        body2
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
    }

    handleSundayStartChange = (val) =>{
        this.setState({sundaystart: val})
    }

    handleSundayEndChange = (val) =>{
        this.setState({sundayend:val})
    }
    
    onChangeSunday(){
        console.log(this.state.sundayend);
        let body = { 
            email: this.state.email,
            newtime: this.state.sundaystart
        };
        let body2 = { 
            email: this.state.email,
            newtime: this.state.sundayend
        };
        axios.put('http://127.0.0.1:8000/api/schedules/change_sundaystart', 
        body
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
          }
      })
      axios.put('http://127.0.0.1:8000/api/schedules/change_sundayend', 
        body2
      )
      .then(function (response) {
          console.log(response);
          if(response.data.message === "SUCCESS"){
              console.log(response.data);
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
                        <div className="np-req-header">Edit Page</div>
                        <div> Edit the time in 24 hr military time </div>
                            <br/>
                            <div><span>Monday: <TimeInterval handlestart={this.handleMondayStartChange} handleend={this.handleMondayEndChange}/> 
                                <button className="login-button" onClick={() => this.onChangeMonday()} > 
                                    <span className="button-login-name">Submit</span>
                            </button></span></div>
                            <div><span>Tuesday: <TimeInterval handlestart={this.handleTuesdayStartChange} handleend={this.handleTuesdayEndChange}/> 
                                <button className="login-button" onClick={() => this.onChangeTuesday()} > 
                                    <span className="button-login-name">Submit</span>
                            </button></span></div>
                            <div><span>Wednesday: <TimeInterval handlestart={this.handleWednesdayStartChange} handleend={this.handleWednesdayEndChange}/> 
                                <button className="login-button" onClick={() => this.onChangeWednesday()} > 
                                    <span className="button-login-name">Submit</span>
                            </button></span></div>
                            <div><span>Thursday: <TimeInterval handlestart={this.handleThursdayStartChange} handleend={this.handleThursdayEndChange}/> 
                                <button className="login-button" onClick={() => this.onChangeThursday()} > 
                                    <span className="button-login-name">Submit</span>
                            </button></span></div>
                            <div><span>Friday: <TimeInterval handlestart={this.handleFridayStartChange} handleend={this.handleFridayEndChange}/> 
                                <button className="login-button" onClick={() => this.onChangeFriday()} > 
                                    <span className="button-login-name">Submit</span>
                            </button></span></div>
                            <div><span>Saturday: <TimeInterval handlestart={this.handleSaturdayStartChange} handleend={this.handleSaturdayEndChange}/> 
                                <button className="login-button" onClick={() => this.onChangeSaturday()} > 
                                    <span className="button-login-name">Submit</span>
                            </button></span></div>
                            <div><span>Sunday: <TimeInterval handlestart={this.handleSundayStartChange} handleend={this.handleSundayEndChange}/> 
                                <button className="login-button" onClick={() => this.onChangeSunday()} > 
                                    <span className="button-login-name">Submit</span>
                            </button></span></div>
                        </div>
                    </div>
                </div>
            )}/>
        );
    }
}

export default EditPage;