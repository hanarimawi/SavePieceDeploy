import React, { Component } from 'react';
import '../style/NonProfitReq.css';
import {Route} from 'react-router-dom'
import EditableMenuItem from '../components/EditableMenuItem';
import axios from 'axios';
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa';

class MenuPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            restaurant: this.props.location.state.detail,
            menuItems: [],
            adding:false,
        }
    }
    componentDidMount(){
        var self = this;
        axios.get('http://127.0.0.1:8000/api/dishes/', 
              { 
                params:{
                    restaurant_email: self.state.restaurant.email
                }
              })
            .then(function (response){
                if(response.data.message === "SUCCESS"){
                    self.setState({menuItems: response.data.result});
                }
            })
    }
    deleteItem(restaurantEmail, itemName){
        var self = this;
        axios.delete('http://127.0.0.1:8000/api/dishes/', { data: { restaurant_email: restaurantEmail, name: itemName } })
        .then(function (response){
            if(response.data.message === "SUCCESS"){
                let menu = self.state.menuItems;
                let menuItems = menu.filter(item => ( item[2] !== itemName))
                self.setState({menuItems});
            }
        })
    }
    onAdd = (val) =>{
        let menuItems = this.state.menuItems;
        menuItems.push(val)
        console.log(menuItems,val)
        this.setState({menuItems, adding:false});
    }
    render() {
        return (
            <Route render={({ history}) => (
                <div className="np-req-page">
                    <div className="navigation">
                        <div onClick={() => history.push({pathname: '/rhome', state: { detail: this.state.restaurant}})} className = "r-nav-title"><img className="np-req-logo"alt="Save Me A Piece" src={require('../logo.png')}/>HOME </div>
                        <div onClick={() => history.push({pathname: '/np-req', state: { detail: this.state.restaurant}})} className = "r-nav-title">NON PROFIT REQUESTS</div>
                        <div className = "r-nav-title">MY MENU</div>
                        <div className = "r-nav-title">SETTINGS</div>
                    </div>
                    <div className="np-req-body">
                        <div className = "results">
                            <div className="np-req-header">My Menu</div>
                            <br/>
                            <div className="all-np-req-subheaders">
                                <span className="np-req-subheader">Menu Item</span>
                                <span className="np-req-subheader">Price Per Meal</span>
                                <span className="np-req-subheader">Recommended Price</span>
                                <span className="np-req-subheader">Servings</span>
                                <span className="np-req-subheader"><FaPlusCircle className="add-item" size="1.5em" color="#EAF1E3" onClick={() => this.setState({adding:true})}/></span>
                            </div>
                            <br/>
                            {this.state.menuItems && this.state.menuItems.map((item) =>
                                <li key={item[2]}>
                                <EditableMenuItem item={item[2]} price={item[3]} servings={item[4]}/>
                                <FaMinusCircle className="delete-item" size="1.5em" color="#F9E8EC" onClick={() => this.deleteItem(item[0], item[2])}/>
                                </li>
                            )}

                            {
                                this.state.adding &&
                                <div>
                                    <EditableMenuItem onAdded={this.onAdd} restaurantEmail={this.state.restaurant.email} restaurantName={this.state.restaurant.name} newItem={true} item="" price={0} servings={0}/>
                                    {/* <FaCheckCircle className="delete-item"  size="1.5em" color="#F9E8EC" onClick={() => this.addItem()}/> */}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )}/>
        );
    }
}

export default MenuPage;