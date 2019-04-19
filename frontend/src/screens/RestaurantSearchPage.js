import React, { Component } from 'react';
import '../style/RestaurantSearchPage.css';
import '../style/NonProfitReq.css';
import TimeInterval from '../components/TimeInterval'
import RestaurantResult from '../components/RestaurantResult'
import {Route} from 'react-router-dom'
import axios from 'axios'

class RestaurantSearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            budget: 0,
            underrests:null,
            overrests:null,
            nonProfit: this.props.location.state.detail,
        }
        this.onSubmit= this.onSubmit.bind(this);
    }

    onSubmit= () =>{
        axios.get('http://127.0.0.1:8000/api/nonprofits/underbudget_rests_near/', 
          { 
            params:{
                price: this.state.budget,
                city: this.state.nonProfit.city,
                zip_code: this.state.nonProfit.zip_code
            }
          })
        .then(function (response) {
            if(response.data.message === "SUCCESS"){
                console.log(response.data);
                this.setState({underrests: response.data.result});
            }
        }.bind(this));
        axios.get('http://127.0.0.1:8000/api/nonprofits/overbudget_rests_near/', 
          { 
            params:{
                price: this.state.budget,
                city: this.state.nonProfit.city,
                zip_code: this.state.nonProfit.zip_code
            }
          })
        .then(function (response) {
            if(response.data.message === "SUCCESS"){
                this.setState({overrests: response.data.result});
            }
        }.bind(this));
}

BList= (listo) => {
    const listItems = listo.listo.map((item) =>
          <Row item={item}></Row>
    );
    return (
        <table style={{textAlign: 'left', width:'100%'}}>
          <tr>
            <th>Restaurant</th>
            <th>Dish</th> 
            <th>Price</th>
            <th>Servings</th>
        </tr>
            {listItems}
        </table>
    );
  }

handleBudgetChange = (e) =>{
    this.setState({budget: e.target.value})
}

handleCityChange = (e) =>{
    this.setState({localcity: e.target.value})
}

handleZipChange = (e) =>{
    this.setState({localzip: e.target.value})
}
    render() {
        return (
            <Route render={({ history}) => (
                <div className="find-rest-page">
                    <div className="navigation">
                        <div onClick={() => history.path({pathname: '/np-home', state: { detail: this.state.nonProfit}})}className = "nav-title"><img className="rest-logo"alt="Save Me A Piece" src={require('../logo.png')}/>HOME </div>
                        <div className = "nav-title">RESTAURANTS NEAR ME</div>
                        <div onClick={() => history.push({pathname: '/settings', state: { detail:  this.state.nonProfit, passedurl:"/nphome" } })} className = "nav-title">SETTINGS</div>
                    </div>
                    <div className="find-rest-body">
                        {/* <div className="header-div">
                            <span className="ti-header">
                                <span className="header">TIME INTERVAL: </span>
                                <TimeInterval/>
                            </span>
                            <span className="header">SORT: </span>
                            <select className="sort-select">
                                <option value="none">No Filter</option>
                                <option value="alpha">Alphabetical</option>
                                <option value="ltoh">Low To High</option>
                                <option value="htol">High To Low</option>
                            </select>
                            
                        </div> */}
      
                        <div className = "results">
                            <div className="np-req-header">Search For Meals Near You</div>
                            <br/>
                            <span className="nearme-input">
                            <input onChange={this.handleBudgetChange} className="login-text"type="text" placeholder="Budget">
                                </input >
                            </span>
                            <button className="login-button" onClick={() => this.onSubmit()} > 
                                <span className="button-login-name"><b>SUBMIT</b></span>
                            </button>
                            <br/><br/>
                            <br/><br/>
                            {this.state.underrests && <div className="np-req-header">Restaurant Meals Within Budget</div>}
                            {(this.state.underrests || this.state.overrests ) &&
                            <div className="all-rest-subheaders">
                                <span className="rest-subheader">Restaurant Name </span>
                                <span className="rest-subheader">Meal</span>
                                <span className="rest-subheader">Price</span>
                                <span className="rest-subheader">Rating</span>
                                <span className="rest-subheader">Servings</span>
                            </div>}
                            {this.state.underrests && this.state.underrests.map((item) =>
                                <li key={item[0]}>
                                    <RestaurantResult restName={item[2]} restItem={item[3]} restPrice={item[4]} restNumb={item[5]} rating={item[14]}/>
                                </li>
                            )}
                            <br/>
                            {this.state.overrests && <div className="np-req-header">Restaurant Meals Over Budget</div>}
                            {this.state.overrests && this.state.overrests.map((item) =>
                                <li key={item[0]}>
                                    <RestaurantResult restName={item[2]} restItem={item[3]} restPrice={item[4]} restNumb={item[5]} rating={item[14]}/>
                                </li>
                            )}
                        </div>
                    </div>
                </div>
            )}/>

        );
    }
}

class Row extends Component {
    render() {
        return (
            <tr style={{width: '100%'}}>
            <td>{this.props.item[1]}</td>
            <td>{this.props.item[2]}</td>
            <td>{this.props.item[3]}</td>
            <td>{this.props.item[4]}</td>
            </tr>
        );}
    }

export default RestaurantSearchPage;
