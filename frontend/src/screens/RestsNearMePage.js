import React, { Component } from 'react';
import '../style/NonProfitReq.css';
import {Route} from 'react-router-dom'
import axios from 'axios'

class RestsNearMePage extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            budget: 0,
            localzip:0,
            localcity:"",
            underrests:[],
            overrests:[]
        }
        this.onSubmit= this.onSubmit.bind(this);
    }
    
    onSubmit= () =>{
            axios.get('http://127.0.0.1:8000/api/nonprofits/underbudget_rests_near/', 
              { 
                params:{
                    price: this.state.budget,
                    city: this.state.localcity,
                    zip_code: this.state.localzip
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
                    city: this.state.localcity,
                    zip_code: this.state.localzip
                }
              })
            .then(function (response) {
                if(response.data.message === "SUCCESS"){
                    console.log(response.data);
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
                <div className="np-req-page">
                    <div className="navigation">
                        <div onClick={() => history.push(this.state.url)}className = "r-nav-title"><img className="np-req-logo"alt="Save Me A Piece" src={require('../logo.png')}/>HOME </div>
                        <div className = "r-nav-title">NON PROFIT REQUESTS</div>
                        <div onClick={() => history.push("/menu")} className = "r-nav-title">MY MENU</div>
                        <div className = "r-nav-title">SETTINGS</div>
                    </div>
                    <div className="np-req-body">
                        <div className = "results">
                            <div className="np-req-header">Restaurant Search</div>
                            <br/>
                            <div className="login-input">
                            <input onChange={this.handleBudgetChange} className="login-text"type="text" placeholder="Budget">
                                </input >
                            </div>
                            <div className="login-input">
                            <input onChange={this.handleCityChange} className="login-text"type="text" placeholder="City">
                                </input >
                            </div>
                            <div className="login-input">
                            <input onChange={this.handleZipChange} className="login-text"type="text" placeholder="Zip">
                                </input >
                            </div>
                            <button className="login-button" onClick={() => this.onSubmit()} > 
                                <span className="button-login-name">Submit</span>
                            </button>
                            <br/><br/>
                            <br/><br/>
                            <div className="np-req-header">In Area and Within Budget</div>
                            <br/><br/>
                            <this.BList listo={this.state.underrests} ></this.BList>
                            <br/><br/><br/>
                            <div>__________________________________</div>
                            <br/><br/><br/>
                            <div className="np-req-header">In Area But Over Budget</div>
                            <br/><br/>
                            <this.BList listo={this.state.overrests} ></this.BList>
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

export default RestsNearMePage;

// style={{padding: '10px', margin: '10px'}}