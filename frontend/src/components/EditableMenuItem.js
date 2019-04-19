import React, { Component } from 'react';
import '../style/EditableMenuItem.css';
import {FaCheckCircle} from 'react-icons/fa';
import axios from 'axios';

class EditableMenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: this.props.item,
            price: this.props.price,
            recPrice: "$0.00",
            servings: this.props.servings
        }
    }
    addItem(){
        var self = this;
        axios.post('http://127.0.0.1:8000/api/dishes/', { restaurant_email: self.props.restaurantEmail, restaurant_name: self.props.restaurantName, name: self.state.item, price:self.state.price, servings:self.state.servings })
        .then(function (response){
            if(response.data.message === "SUCCESS"){
                self.props.onAdded([self.props.restaurantEmail, self.props.restaurantName, self.state.item, self.state.price, self.state.servings])
                // let menu = self.state.menuItems;
                // let menuItems = menu.add(response.data.result)
                // self.setState({menuItems});
            }
        })
    }


    render() {
        return (
        <div className="menu-result-wrap">
        <span className="menu-result">
            <span className="menu-text"><input className="menu-item" size="15" type="text" value={this.state.item} onChange={(e) => this.setState({item: e.target.value})} /></span> 
            <span className="menu-text">$<input className="menu-item five"  type="number" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})} /></span> 
            <span className="menu-text">{this.state.recPrice}</span> 
            <span className="menu-text-last"><input className="menu-item three"  type="number" value={this.state.servings} onChange={(e) => this.setState({servings: e.target.value})} /></span> 
        </span>
        {
            this.props.newItem &&
            <FaCheckCircle className="delete-item"  size="1.5em" color="#F9E8EC" onClick={() => this.addItem()}/>
        }
        </div>
        );
    }
}

export default EditableMenuItem;