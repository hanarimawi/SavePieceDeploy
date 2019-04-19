import React, { Component } from 'react';
import '../style/NPResult.css';
import {FaCheckCircle,FaTimesCircle} from 'react-icons/fa';

class RestaurantResult extends Component {
    render() {
        return (
        <div className="np-result">
            <span className="np-text">{this.props.npName}</span> 
            <span className="np-text">{this.props.meal}</span> 
            <span className="np-text"><FaCheckCircle onClick={this.props.onClickAccept} color="green"/>  <FaTimesCircle onClick={this.props.onClickReject} color="red"/></span> 
            <span className="np-text-last">{this.props.servings}</span> 
        </div>
        );
    }
}

export default RestaurantResult;