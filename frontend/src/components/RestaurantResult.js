import React, { Component } from 'react';
import '../style/RestaurantResult.css';

class RestaurantResult extends Component {
    render() {
        return (
        <div className="rest-result">
            <span className="rest-text">{this.props.restName}</span> 
            <span className="rest-text">{this.props.restItem}</span> 
            <span className="rest-text">{this.props.restPrice}</span> 
            <span className="rest-text">{this.props.rating}</span> 
            <span className="rest-text-last">{this.props.restNumb}</span> 
        </div>
        );
    }
}

export default RestaurantResult;